import React from "react";
import { useTranslation } from "react-i18next";
import "./FooterLanguageSwitcher.css";

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

const FooterLanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageToggle = () => {
    // Toggle between English and French
    const currentLang = i18n.language || "en";
    const nextLang = currentLang === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLang);
  };

  const currentLang = i18n.language || "en";
  const currentLanguage = languages[currentLang as keyof typeof languages] || languages.en;

  return (
    <div className="footer-language-switcher">
      <button
        onClick={handleLanguageToggle}
        className="footer-language-toggle"
        aria-label={`Switch to ${currentLang === "en" ? "French" : "English"}`}
        title={`Switch to ${currentLang === "en" ? "French" : "English"}`}
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="footer-flag-image"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <span className="footer-language-code">{currentLanguage.code}</span>
      </button>
    </div>
  );
};

export default FooterLanguageSwitcher;