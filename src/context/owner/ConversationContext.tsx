import { createContext, useContext, useEffect, useState, useRef } from "react";
import conversationService from "../../services/chat/conversationService.js";
import messagingService from "../../services/chat/messagingService.js";
import { toast } from "react-hot-toast";

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
    file_path?: string | null;
}

interface ConversationContextType {
    conversations: Conversation[];
    selectedConversation: Conversation | null;
    getConversations: () => Promise<void>;
    selectConversation: (conversation: Conversation) => Promise<void>;
    sendMessage: (recipientEmail: string, content: string, file?: File) => Promise<void>;
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

    const sortMessages = (messages: Message[]): Message[] => {
        return [...messages].sort(
            (a, b) => new Date(a.sent_at).getTime() - new Date(b.sent_at).getTime()
        );
    };

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
                toast.error("Failed to load user information");
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

            const sortedConversations = sortConversations(conversationsWithMessages);
            setConversations(sortedConversations);

            const currentId = selectedConversation?.conversation_id;
            const found = sortedConversations.find(
                (conv: Conversation) => conv.conversation_id === currentId
            );
            if (found) {
                setSelectedConversation({
                    ...found,
                    messages: sortMessages(found.messages),
                });
            } else if (sortedConversations.length > 0) {
                setSelectedConversation(sortedConversations[0]);
            } else {
                setSelectedConversation(null);
            }

            if (sortedConversations.length > 0 && !currentId) {
                setupWebSocket(sortedConversations[0].conversation_id);
            } else if (found) {
                setupWebSocket(found.conversation_id);
            }
        } catch (error) {
            console.error("Error fetching conversations:", error);
            toast.error("Failed to load conversations");
        }
    };

    const selectConversation = async (conversation: Conversation) => {
        try {
            console.log("Selecting conversation:", conversation.conversation_id);
            setSelectedConversation({
                ...conversation,
                messages: sortMessages(conversation.messages || []),
            });

            if (wsRef.current?.conversationId !== conversation.conversation_id) {
                setupWebSocket(conversation.conversation_id);
            }
        } catch (error) {
            console.error("Error selecting conversation:", error);
            toast.error("Failed to select conversation");
        }
    };

    const setupWebSocket = async (conversationId: string) => {
        if (
            wsRef.current?.conversationId !== conversationId &&
            wsRef.current?.ws
        ) {
            wsRef.current.ws.close();
            wsRef.current = null;
        }

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
            toast.error("Failed to connect to chat service");
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
        const isOwnMessage = sentMessages.current.has(message.message_id) ||
            (message.sender_id === senderInfo.senderId && message.sender_type === senderInfo.senderType);

        if (selectedConversation?.conversation_id === message.conversation_id) {
            setSelectedConversation((prev) => {
                if (!prev) return prev;
                const existingIndex = prev.messages?.findIndex(
                    (m) => m.message_id === message.message_id ||
                        (m.temp && m.sender_id === message.sender_id && m.content === message.content)
                );

                const newMessages = existingIndex >= 0
                    ? prev.messages.map((m, i) => i === existingIndex ? { ...message, file_path: message.file_path || null } : m)
                    : [...(prev.messages || []), { ...message, file_path: message.file_path || null }];

                return {
                    ...prev,
                    messages: sortMessages(newMessages),
                };
            });
        }

        setConversations((prev) => {
            const updated = prev.map((conv) => {
                if (conv.conversation_id === message.conversation_id) {
                    const existing = conv.messages.some((m) => m.message_id === message.message_id);
                    const updatedMessages = existing
                        ? conv.messages.map((m) => m.message_id === message.message_id ? { ...message, file_path: message.file_path || null } : m)
                        : [...conv.messages, { ...message, file_path: message.file_path || null }];

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

    const sendMessage = async (recipientEmail: string, content: string, file?: File) => {
        if (!selectedConversation) throw new Error("No conversation selected");
        if (!senderInfo.senderId || !senderInfo.senderType) throw new Error("Sender info missing");


        const tempMessageId = crypto.randomUUID();
        const tempContent = file ? `uploads/chats/temp/${file.name}` : content.trim();

        const tempMessage: Message = {
            message_id: tempMessageId,
            conversation_id: selectedConversation.conversation_id,
            sender_id: senderInfo.senderId,
            sender_type: senderInfo.senderType,
            content: tempContent,
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
            const formData = new FormData();
            formData.append("recipient_email", recipientEmail);
            formData.append("content", content.trim() || "");
            if (file) formData.append("file", file);

            const response = await messagingService.send_message(formData);

            handleIncomingMessage({
                ...response,
                content: response.content,
            });

            await getConversations();
            toast.success("Message sent successfully");
        } catch (error: any) {
            setSelectedConversation((prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    messages: (prev.messages || []).filter((m) => m.message_id !== tempMessageId),
                };
            });
            sentMessages.current.delete(tempMessageId);
            toast.error(`Failed to send message: ${error.message || "Unknown error"}`);
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