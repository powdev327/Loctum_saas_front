import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

const languages = {
  en: {
    flag: "https://flagcdn.com/w40/us.png",
    name: "English",
    nativeName: "English",
    code: "EN"
  },
  fr: {
    flag: "https://flagcdn.com/w40/fr.png",
    name: "French",
    nativeName: "Français",
    code: "FR"
  }
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    // Toggle between English and French
    const currentLang = i18n.language || "en";
    const nextLang = currentLang === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLang);
  };

  const currentLang = i18n.language || "en";
  const currentLanguage = languages[currentLang] || languages.en;

  return (
    <div className="language-switcher">
      <button
        onClick={handleLanguageToggle}
        className="language-toggle-simple"
        aria-label={`Switch to ${currentLang === "en" ? "French" : "English"}`}
        title={`Switch to ${currentLang === "en" ? "French" : "English"}`}
      >
        <div className="flag-container">
          <img
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            className="flag-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <div className="language-info">
          <span className="language-code">{currentLanguage.code}</span>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;

