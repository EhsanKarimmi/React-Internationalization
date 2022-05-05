import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../public/locales/en/translation.json";
import faTranslation from "../public/locales/fa/translation.json";

const resources = {
    en: {
        translation: enTranslation,
    },
    fa: {
        translation: faTranslation,
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        resources,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            lookupLocalStorage: "Github_Club_Lang",
        },
    });

export default i18n;
