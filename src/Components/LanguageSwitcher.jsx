import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setDropdownOpen(false);
    };

    return (
        <div className="language-switcher relative">
            <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="language-toggle flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out"
                    >
                        <FaGlobe className="text-lg" /> {i18n.language.toUpperCase()}
                    </button>
                    <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                        <button onClick={() => handleLanguageChange("en")}>
                            🇺🇸 English
                        </button>
                        <button onClick={() => handleLanguageChange("fr")}>
                            🇫🇷 Français
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;