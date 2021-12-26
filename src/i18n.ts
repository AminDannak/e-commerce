import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";

const FALLBACK_LANGUAGE = ["en"];
const AVAILABLE_LANGUAGES = ["en", "fa"];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init(() => ({
    fallbackLng: FALLBACK_LANGUAGE,
    debug: false,
    whitelist: AVAILABLE_LANGUAGES,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  }));

i18n.changeLanguage("en"); // to test farsi

export default i18n;
