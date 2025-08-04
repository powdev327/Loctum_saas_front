import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const flags = {
  en: "https://flagcdn.com/w40/us.png",
  fr: "https://flagcdn.com/w40/fr.png",
};

const FooterLanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Close dropdown on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
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
    <div className="footer-language-switcher">
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          aria-label={t('home.footer.languageSwitcher.selectLanguage')}
        >
          <img
            src={flags[currentLang as keyof typeof flags]}
            alt={currentLang === "en" ? t('home.footer.languageSwitcher.english') : t('home.footer.languageSwitcher.french')}
            className="w-4 h-4 rounded-sm"
          />
          <span className="uppercase font-medium">{currentLang}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${
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
            />
          </svg>
        </button>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg min-w-[120px] z-50"
          >
            <button
              onClick={() => handleLanguageChange("en")}
              tabIndex={dropdownOpen ? 0 : -1}
              className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 first:rounded-t-lg"
            >
              <img
                src={flags.en}
                alt={t('home.footer.languageSwitcher.english')}
                className="w-4 h-4 rounded-sm"
              />
              {t('home.footer.languageSwitcher.english')}
            </button>
            <button
              onClick={() => handleLanguageChange("fr")}
              tabIndex={dropdownOpen ? 0 : -1}
              className="flex items-center gap-2 px-3 py-2 w-full text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 last:rounded-b-lg"
            >
              <img
                src={flags.fr}
                alt={t('home.footer.languageSwitcher.french')}
                className="w-4 h-4 rounded-sm"
              />
              {t('home.footer.languageSwitcher.french')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterLanguageSwitcher;