import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
// import HttpApi from "i18next-http-backend";
// import XHR from "i18next-xhr-backend";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/public/locales/{{lng}}/translation.json",
        },
        detection: {
            lookupLocalStorage: "Github_Club_Lang",
        },
    });

export default i18n;
