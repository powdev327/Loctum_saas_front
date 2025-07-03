import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

interface ChatBoxSendFormProps {
  onSend: (content: string, file?: File) => void;
  disabled?: boolean;
}

export default function ChatBoxSendForm({ onSend, disabled }: ChatBoxSendFormProps) {
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`${file.name} is too large (max 10MB)`);
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;

    const trimmedContent = content.trim();
    if (!trimmedContent && !selectedFile) {
      toast.error("Cannot send empty message with no file");
      return;
    }

    try {
      await onSend(trimmedContent, selectedFile || undefined);
      setContent("");
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error: any) {
      toast.error(`Failed to send message: ${error.message || "Unknown error"}`);
    }
  };

  return (
      <div className="sticky bottom-0 p-3 border-t border-gray-200 dark:border-gray-800">
        <form className="flex flex-col items-center justify-between" onSubmit={handleSubmit}>
          {selectedFile && (
              <div className="w-full mb-2 flex flex-wrap gap-2">
                <div className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                  <span className="truncate max-w-[150px]">{selectedFile.name}</span>
                  <button
                      type="button"
                      onClick={removeFile}
                      className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              </div>
          )}
          <div className="flex items-center w-full">
            <button
                type="button"
                onClick={handleFileButtonClick}
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90 mr-2"
                title="Attach file"
                disabled={disabled}
            >
              📎
            </button>
            <input
                type="file"
                name="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png,.html,.js"
            />
            <textarea
                placeholder="Type a message"
                className="flex-1 pl-2 pr-5 text-sm text-gray-800 dark:text-white/90 bg-transparent border-none outline-none h-9 placeholder:text-gray-400 focus:border-0 focus:ring-0 resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={disabled}
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
            />
            <button
                type="submit"
                className="flex items-center justify-center ml-3 text-white rounded-lg h-9 w-9 bg-brand-500 hover:bg-brand-600 xl:ml-5"
                disabled={disabled}
            >
              ➤
            </button>
          </div>
        </form>
      </div>
  );
}
