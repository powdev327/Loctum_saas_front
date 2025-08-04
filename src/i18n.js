import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './translations/en/en.json';
import translationFR from './translations/fr/fr.json';

i18n
    .use(LanguageDetector) // détecte la langue du navigateur
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            fr: { translation: translationFR }
        },
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            checkWhitelist: true
        },
        interpolation: {
            escapeValue: false // react s’occupe déjà de ça
        }
    });

export default i18n;