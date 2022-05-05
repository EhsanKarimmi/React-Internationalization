import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import XHR from "i18next-xhr-backend";

i18n.use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        // backend: {
        //     loadPath: "../public/locales/{{lng}}/translation.json",
        //     allowMultiLoading: false,
        // },

        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
            allowMultiLoading: false,
        },
        interpolation: {
            escapeValue: false,
        },
        detection: {
            lookupLocalStorage: "Github_Club_Lang",
        },
    });

export default i18n;
