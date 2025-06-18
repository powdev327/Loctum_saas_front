import { createContext, useContext, useEffect, useState, useRef } from "react";
import conversationService from "../../services/chat/conversationService.js";
import messagingService from "../../services/chat/messagingService.js";

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const useConversation = () => {
    const context = useContext(ConversationContext);
    if (!context) {
        throw new Error("useConversation must be used within a ConversationProvider");
    }
    return context;
};

interface WsRef {
    ws: WebSocket;
    conversationId: string;
    retryCount: number;
}

interface Conversation {
    conversation_id: string;
    client_id: string;
    locum_id: string;
    user_type: string;
    client_email: string | null;
    client_image: string | null;
    locum_email: string | null;
    locum_image: string | null;
    created_at: string;
    messages: Message[];
}

interface Message {
    message_id: string;
    conversation_id: string;
    sender_id: string;
    sender_type: string;
    content: string;
    is_read: boolean;
    sent_at: string;
    temp?: boolean;
}

interface ConversationContextType {
    conversations: Conversation[];
    selectedConversation: Conversation | null;
    getConversations: () => Promise<void>;
    selectConversation: (conversation: Conversation) => Promise<void>;
    sendMessage: (recipientEmail: string, content: string) => Promise<void>;
}

export const ConversationProvider = ({ children }: { children: React.ReactNode }) => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const wsRef = useRef<WsRef | null>(null);
    const sentMessages = useRef(new Map<string, number>());
    const [senderInfo, setSenderInfo] = useState<{
        senderId: string | null;
        senderType: string | null;
    }>({ senderId: null, senderType: null });

    // Sort messages by sent_at in ascending order
    const sortMessages = (messages: Message[]): Message[] => {
        return [...messages].sort(
            (a, b) => new Date(a.sent_at).getTime() - new Date(b.sent_at).getTime()
        );
    };

    // Sort conversations by last message or creation date
    const sortConversations = (conversations: Conversation[]): Conversation[] => {
        return [...conversations].sort((a, b) => {
            const aTime = a.messages[a.messages.length - 1]?.sent_at || a.created_at;
            const bTime = b.messages[b.messages.length - 1]?.sent_at || b.created_at;
            return new Date(bTime).getTime() - new Date(aTime).getTime();
        });
    };

    useEffect(() => {
        const fetchSenderInfo = async () => {
            const userType = localStorage.getItem("user_type");
            if (!userType) return;

            try {
                const userInfo = await messagingService.get_user_info();
                if (userInfo?.id) {
                    setSenderInfo({ senderId: userInfo.id, senderType: userType });
                }
            } catch (error) {
                console.error("Error fetching sender info:", error);
            }
        };
        fetchSenderInfo();
    }, []);

    const getConversations = async () => {
        try {
            const data = await conversationService.get_conversations();
            const conversationsWithMessages = data.map((conv: Conversation) => ({
                ...conv,
                messages: sortMessages(conv.messages || []),
            }));

            setConversations(sortConversations(conversationsWithMessages));

            if (conversationsWithMessages.length > 0) {
                const found = conversationsWithMessages.find(
                    (conv: Conversation) =>
                        selectedConversation?.conversation_id === conv.conversation_id
                );
                const newSelected = found || conversationsWithMessages[0];
                setSelectedConversation(newSelected);
                setupWebSocket(newSelected.conversation_id);
            }
        } catch (error) {
            console.error("Error fetching conversations:", error);
        }
    };

    const selectConversation = async (conversation: Conversation) => {
        try {
            console.log("Selecting conversation:", conversation.conversation_id);
            const messages = await conversationService.get_messages(
                conversation.conversation_id
            );
            setSelectedConversation({
                ...conversation,
                messages: sortMessages(messages),
            });
            setupWebSocket(conversation.conversation_id);
        } catch (error) {
            console.error("Error selecting conversation:", error);
        }
    };

    const setupWebSocket = async (conversationId: string) => {
        // Close existing connection if different
        if (
            wsRef.current?.conversationId !== conversationId &&
            wsRef.current?.ws
        ) {
            wsRef.current.ws.close();
            wsRef.current = null;
        }

        // Skip if already connected to this conversation
        if (wsRef.current?.conversationId === conversationId) return;

        try {
            const ws = await messagingService.create_websocket(
                conversationId,
                handleIncomingMessage
            );

            if (!ws) {
                throw new Error("Failed to create WebSocket");
            }

            wsRef.current = {
                ws,
                conversationId,
                retryCount: 0,
            };
        } catch (error) {
            console.error("WebSocket setup failed:", error);

            const retryDelay = Math.min(
                1000 * Math.pow(2, wsRef.current?.retryCount || 0),
                30000
            );
            setTimeout(() => setupWebSocket(conversationId), retryDelay);

            if (wsRef.current) {
                wsRef.current.retryCount = (wsRef.current.retryCount || 0) + 1;
            }
        }
    };

    const handleIncomingMessage = (message: Message) => {
        const isOwnMessage =
            sentMessages.current.has(message.message_id) ||
            (message.sender_id === senderInfo.senderId &&
                message.sender_type === senderInfo.senderType);

        // Update selected conversation
        if (selectedConversation?.conversation_id === message.conversation_id) {
            setSelectedConversation((prev) => {
                if (!prev) return prev;
                const existingIndex = prev.messages?.findIndex(
                    (m) =>
                        m.message_id === message.message_id ||
                        (m.temp &&
                            m.sender_id === message.sender_id &&
                            m.content === message.content)
                );

                const newMessages =
                    existingIndex >= 0
                        ? prev.messages.map((m, i) =>
                            i === existingIndex ? message : m
                        )
                        : [...(prev.messages || []), message];

                return {
                    ...prev,
                    messages: sortMessages(newMessages),
                };
            });
        }

        // Update conversations list
        setConversations((prev) => {
            const updated = prev.map((conv) => {
                if (conv.conversation_id === message.conversation_id) {
                    const existing = conv.messages.some(
                        (m) => m.message_id === message.message_id
                    );
                    const updatedMessages = existing
                        ? conv.messages.map((m) =>
                            m.message_id === message.message_id ? message : m
                        )
                        : [...conv.messages, message];

                    return {
                        ...conv,
                        messages: sortMessages(updatedMessages),
                        updated_at: message.sent_at,
                    };
                }
                return conv;
            });

            return sortConversations(updated);
        });

        if (isOwnMessage) {
            sentMessages.current.delete(message.message_id);
        }
    };

    const sendMessage = async (recipientEmail: string, content: string) => {
        if (!selectedConversation) throw new Error("No conversation selected");
        if (!senderInfo.senderId || !senderInfo.senderType)
            throw new Error("Sender info missing");
        if (!recipientEmail) throw new Error("Recipient email is required");

        const tempMessageId = crypto.randomUUID();
        const tempMessage: Message = {
            message_id: tempMessageId,
            conversation_id: selectedConversation.conversation_id,
            sender_id: senderInfo.senderId,
            sender_type: senderInfo.senderType,
            content,
            is_read: false,
            sent_at: new Date().toISOString(),
            temp: true,
        };

        setSelectedConversation((prev) => {
            if (!prev) return prev;
            return {
                ...prev,
                messages: sortMessages([...(prev.messages || []), tempMessage]),
            };
        });

        sentMessages.current.set(tempMessageId, Date.now());

        try {
            const messageData = {
                recipient_email: recipientEmail,
                content,
                sender_id: senderInfo.senderId,
                sender_type: senderInfo.senderType,
            };

            console.log("Sending message:", messageData);

            if (wsRef.current?.ws?.readyState === WebSocket.OPEN) {
                wsRef.current.ws.send(JSON.stringify(messageData));
            } else {
                console.warn("WebSocket not open, falling back to HTTP");
                const response = await messagingService.send_message(messageData);
                handleIncomingMessage(response);
                getConversations()
            }
        } catch (error) {
            console.error("Error sending message:", error);

            setSelectedConversation((prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    messages: (prev.messages || []).filter(
                        (m) => m.message_id !== tempMessageId
                    ),
                };
            });
            sentMessages.current.delete(tempMessageId);
            throw error;
        }
    };

    useEffect(() => {
        getConversations();
        return () => {
            if (wsRef.current?.ws) {
                wsRef.current.ws.close();
            }
        };
    }, []);

    return (
        <ConversationContext.Provider
            value={{
                conversations,
                selectedConversation,
                getConversations,
                selectConversation,
                sendMessage,
            }}
        >
            {children}
        </ConversationContext.Provider>
    );
};