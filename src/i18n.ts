import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            lookupLocalStorage: "Github_Club_Lang",
        },
        backend: {
            loadPath: "/React-Internationalization/locales/{{lng}}/translation.json",
        },
    });

export default i18n;
