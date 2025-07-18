import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const flags = {
  en: "https://flagcdn.com/w40/us.png",
  fr: "https://flagcdn.com/w40/fr.png",
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Close dropdown on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && dropdownOpen) {
        setDropdownOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [dropdownOpen]);

  const currentLang = i18n.language || "en";

  return (
    <div className="language-switcher relative">
      <div className="hidden md:flex items-center space-x-4">
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="language-toggle flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out text-sm"
            style={{ minHeight: "40px" }}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            aria-label="Select language"
          >
            <img
              src={flags[currentLang]}
              alt={currentLang === "en" ? "English" : "Français"}
              className="w-5 h-5 rounded-sm"
            />
            <span className="uppercase font-medium">{currentLang}</span>
            <svg
              className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            ref={dropdownRef}
            className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}
          >
            <button
              onClick={() => handleLanguageChange("en")}
              tabIndex={dropdownOpen ? 0 : -1}
              className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
            >
              <img
                src={flags.en}
                alt="English"
                className="w-5 h-5 rounded-sm"
              />
              English
            </button>
            <button
              onClick={() => handleLanguageChange("fr")}
              tabIndex={dropdownOpen ? 0 : -1}
              className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
            >
              <img
                src={flags.fr}
                alt="Français"
                className="w-5 h-5 rounded-sm"
              />
              Français
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

