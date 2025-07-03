import { useState } from "react";
import { useConversation } from "../../context/owner/ConversationContext.tsx";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";

export default function ChatBoxHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedConversation } = useConversation();

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const getDisplayNames = (conversation) => {
    if (!conversation) return "No conversation selected";
    return conversation.user_type === "client" ? conversation.locum_name : conversation.institution_name;
  };

  const getProfileImage = (conversation) => {
    if (!conversation) return "/default.png";
    return conversation.user_type === "locum"
        ? conversation.client_image
            ? `http://127.0.0.1:8000/${conversation.client_image}`
            : "/default.png"
        : conversation.locum_image
            ? `http://127.0.0.1:8000${conversation.locum_image}`
            : "/default.png";
  };

  const hasUnreadMessages = (conversation) => {
    if (!conversation || !conversation.messages || conversation.messages.length === 0) return false;
    return conversation.messages.some(
        (msg) => !msg.is_read && msg.sender_type !== conversation.user_type
    );
  };

  return (
      <div className="sticky flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800 xl:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-full max-w-[48px] rounded-full">
            <img
                src={getProfileImage(selectedConversation)}
                alt="profile"
                className="object-cover object-center w-full h-full overflow-hidden rounded-full"
            />
            <span
                className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-[1.5px] border-white ${
                    hasUnreadMessages(selectedConversation) ? "bg-warning-500" : "bg-success-500"
                } dark:border-gray-900`}
            ></span>
          </div>

          <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {getDisplayNames(selectedConversation)}
          </h5>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative -mb-1.5">
            <div className="relative inline-block">
              <button onClick={toggleDropdown}>
                <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 size-6" />
              </button>
              <Dropdown
                  isOpen={isOpen}
                  onClose={closeDropdown}
                  className="w-40 p-2"
              >
                <DropdownItem
                    onItemClick={closeDropdown}
                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  View More
                </DropdownItem>
                <DropdownItem
                    onItemClick={closeDropdown}
                    className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                >
                  Delete
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
  );
}