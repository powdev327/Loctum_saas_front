import { useEffect, useState } from "react";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { useClient } from "../../context/owner/ClientContext.tsx";
import { useLocum } from "../../context/locum/LocumContext";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "../../Components/LanguageSwitcher.jsx";

interface UserDropdownProps {
    userType: "client" | "locum";
}

export default function UserDropdown({ userType }: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const clientData = userType === "client" ? useClient() : null;
    const locumData = userType === "locum" ? useLocum() : null;

    const client = clientData?.client;
    const refreshClient = clientData?.refreshClient;
    const locum = locumData?.locum;
    const refreshLocum = locumData?.refreshLocum;

    const handleSignOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_type");
        navigate("/sign-in");
    };

    const displayImage =
        userType === "locum"
            ? `http://127.0.0.1:8000${locum?.logo_url}`
            : `http://127.0.0.1:8000/${client?.logo_url}`;

    useEffect(() => {
        if (userType === "client") refreshClient?.();
        if (userType === "locum") refreshLocum?.();
    }, [userType]);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function closeDropdown() {
        setIsOpen(false);
    }

    return (
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* User dropdown button and dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
            >
              <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                <img src={displayImage} alt="User" />
              </span>

              <span className="block mr-1 font-medium text-theme-sm">
                {userType === "locum"
                  ? locum?.full_name || "Undefined"
                  : client?.institution_name || "Undefined"}
              </span>

              <svg
                className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-100" : ""
                }`}
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <Dropdown
              isOpen={isOpen}
              onClose={closeDropdown}
              className="absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
            >
              <div>
                <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                  {userType === "locum"
                    ? locum?.full_name || "Undefined"
                    : client?.institution_name || "Undefined"}
                </span>
                <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
                  {userType === "locum"
                    ? locum?.email || "Undefined"
                    : client?.email || "Undefined"}
                </span>
              </div>

              <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                <li>
                  <DropdownItem
                    onItemClick={closeDropdown}
                    tag="a"
                    to={userType === "locum" ? "/Locumprofile" : "/profile"}
                    className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                  >
                    {/* SVG icon here */}
                    Edit profile
                  </DropdownItem>
                </li>
              </ul>

              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                {/* SVG icon here */}
                Sign out
              </button>
            </Dropdown>
          </div>
        </div>
    );
}
