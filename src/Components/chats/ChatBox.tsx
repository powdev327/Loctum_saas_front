import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxSendForm from "./ChatBoxSendForm";
import { useConversation } from "../../context/owner/ConversationContext.tsx";
import { useEffect, useRef } from "react";
import FileCard from "../file-manager/FileCard.tsx";
import {FileIcon} from "../../icons";

export default function ChatBox() {
    const { selectedConversation, sendMessage } = useConversation();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = async (content: string, file?: File) => {
        if (!selectedConversation) return;

        const recipientEmail =
            selectedConversation.user_type === "client"
                ? selectedConversation.locum_email
                : selectedConversation.client_email;

        await sendMessage(recipientEmail, content, file);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedConversation?.messages]);

    const getSenderInfo = (message) => {
        if (!selectedConversation) return { email: "", image: "/default.png" };

        const isSenderClient = message.sender_type === "client";

        return {
            email: isSenderClient
                ? selectedConversation.institution_name
                : selectedConversation.locum_name,
            image: isSenderClient
                ? selectedConversation.client_image
                    ? `http://127.0.0.1:8000/${selectedConversation.client_image}`
                    : "/default.png"
                : selectedConversation.locum_image
                    ? `http://127.0.0.1:8000${selectedConversation.locum_image}`
                    : "/default.png",
        };
    };

    const formatFileTitle = (fileName: string) => {
        const nameWithoutExt = fileName.replace(/\.[^/.]+$/, ""); // retire l'extension
        const parts = nameWithoutExt.split("_");
        const nameWithoutId = parts.slice(1).join(" ");

        return nameWithoutId
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };


    const renderMessageContent = (msg) => {
        const normalizedContent = msg.content.startsWith("/")
            ? msg.content
            : "/" + msg.content;

        const extension = normalizedContent.split(".").pop()?.toLowerCase() || "";
        const fileName = normalizedContent.split("/").pop() || "";
        const fileUrl = `http://127.0.0.1:8000${normalizedContent}`;

        const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp", "svg"];
        const pdfExtensions = ["pdf"];
        const docExtensions = ["doc", "docx", "txt", "rtf"];
        const spreadsheetExtensions = ["xls", "xlsx", "csv"];
        const archiveExtensions = ["zip", "rar", "7z", "tar", "gz"];


        if (imageExtensions.includes(extension)) {
            return (
                <div className="relative inline-block max-w-xs max-h-60 rounded-lg overflow-hidden">
                    <img
                        src={fileUrl || "/placeholder.svg"}
                        alt={fileName}
                        className="max-w-xs max-h-60 rounded-lg"
                    />
                    <div className="absolute bottom-1 right-1 flex gap-2 justify-end">
                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-75 transition"
                        >
                            View
                        </a>
                        <a
                            href={fileUrl}
                            download
                            className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-75 transition"
                        >
                            Download
                        </a>
                    </div>
                </div>
            );
        }


        if (pdfExtensions.includes(extension) ||
            docExtensions.includes(extension) ||
            spreadsheetExtensions.includes(extension) ||
            archiveExtensions.includes(extension) ||
            normalizedContent.startsWith("/uploads/chats")) {


            const getFileTypeInfo = () => {
                if (pdfExtensions.includes(extension)) {
                    return {
                        icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        ),
                        style: "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400",
                        type: "PDF Document"
                    };
                }

                if (docExtensions.includes(extension)) {
                    return {
                        icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        ),
                        style: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
                        type: "Document"
                    };
                }

                if (spreadsheetExtensions.includes(extension)) {
                    return {
                        icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        ),
                        style: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
                        type: "Spreadsheet"
                    };
                }

                if (archiveExtensions.includes(extension)) {
                    return {
                        icon: (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ),
                        style: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
                        type: "Archive"
                    };
                }


                return {
                    icon: <FileIcon className="w-5 h-5" />,
                    style: "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400",
                    type: "File"
                };
            };

            const fileInfo = getFileTypeInfo();

            return (
                <div className="max-w-sm">
                    <FileCard
                        icon={fileInfo.icon}
                        title={formatFileTitle(fileName)}
                        usage={fileInfo.type}
                        storageUsed="Unknown size"
                        fileCount={1}
                        fileUrl={fileUrl}
                        iconStyle={fileInfo.style}
                    />
                </div>
            );
        }


        return <p className="text-sm">{msg.content}</p>;
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

                            const normalizedContent = msg.content.startsWith("/")
                                ? msg.content
                                : "/" + msg.content;
                            const extension = normalizedContent.split(".").pop()?.toLowerCase() || "";
                            const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
                            const pdfExtensions = ["pdf"];
                            const isFileOrImage =
                                imageExtensions.includes(extension) ||
                                pdfExtensions.includes(extension) ||
                                normalizedContent.startsWith("/uploads/chats");

                            return (
                                <div
                                    key={msg.message_id || (msg.temp ? `temp-${msg.sent_at}` : msg.message_id)}
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
                                                isFileOrImage
                                                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                                                    : isOwnMessage
                                                        ? "bg-blue-500 text-white dark:bg-blue-500 rounded-tr-none"
                                                        : "bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-white/90 rounded-tl-none"
                                            }`}
                                        >
                                            {renderMessageContent(msg)}
                                        </div>
                                        <p className="mt-2 text-gray-500 text-xs dark:text-gray-400">
                                            {!isOwnMessage && `${senderInfo.email}, `}
                                            {new Date(msg.sent_at).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
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

            <ChatBoxSendForm onSend={handleSendMessage} disabled={!selectedConversation} />
        </div>
    );
}
