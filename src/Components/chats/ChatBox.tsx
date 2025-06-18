import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxSendForm from "./ChatBoxSendForm";
import { useConversation } from "../../context/owner/ConversationContext.tsx";
import { useEffect, useRef } from "react";

export default function ChatBox() {
    const { selectedConversation, sendMessage } = useConversation();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = async (content: string) => {
        if (!selectedConversation) return;

        const recipientEmail = selectedConversation.user_type === "client"
            ? selectedConversation.locum_email
            : selectedConversation.client_email;

        await sendMessage(recipientEmail, content);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedConversation?.messages]);

    const getSenderInfo = (message) => {
        if (!selectedConversation) return { email: "", image: "/default.png" };

        const isClient = selectedConversation.user_type === "client";
        const isSenderClient = message.sender_type === "client";

        return {
            email: isSenderClient ? selectedConversation.client_email : selectedConversation.locum_email,
            image: isSenderClient
                ? selectedConversation.client_image
                    ? `http://127.0.0.1:8000/${selectedConversation.client_image}`
                    : "/default.png"
                : selectedConversation.locum_image
                    ? `http://127.0.0.1:8000${selectedConversation.locum_image}`
                    : "/default.png"
        };
    };

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 xl:w-3/4">
            <ChatBoxHeader />

            <div className="flex-1 max-h-full p-5 space-y-6 overflow-y-auto custom-scrollbar xl:space-y-8 xl:p-6">
                {selectedConversation ? (
                    selectedConversation.messages?.length > 0 ? (
                        selectedConversation.messages.map((msg) => {
                            const isOwnMessage = msg.sender_type === selectedConversation.user_type;
                            const senderInfo = getSenderInfo(msg);

                            return (
                                <div
                                    key={msg.message_id || msg.temp ? `temp-${msg.sent_at}` : msg.message_id}
                                    className={`flex ${isOwnMessage ? "justify-end" : "items-start gap-4"}`}
                                >
                                    {!isOwnMessage && (
                                        <div className="w-10 h-10 overflow-hidden rounded-full">
                                            <img
                                                src={senderInfo.image}
                                                alt="profile"
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </div>
                                    )}

                                    <div className={`${isOwnMessage ? "text-right" : ""}`}>
                                        <div
                                            className={`px-3 py-2 rounded-lg ${
                                                isOwnMessage
                                                    ? "bg-blue-500 text-white dark:bg-blue-500 rounded-tr-none"
                                                    : "bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white/90 rounded-tl-none"
                                            }`}
                                        >
                                            <p className="text-sm">{msg.content}</p>
                                        </div>
                                        <p className="mt-2 text-gray-500 text-xs dark:text-gray-400">
                                            {!isOwnMessage && `${senderInfo.email}, `}
                                            {new Date(msg.sent_at).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 text-center">No messages yet.</p>
                    )
                ) : (
                    <p className="text-gray-500 dark:text-gray-400 text-center">Select a conversation</p>
                )}
                <div ref={messagesEndRef} />
            </div>

            <ChatBoxSendForm
                onSend={handleSendMessage}
                disabled={!selectedConversation}
            />
        </div>
    );
}