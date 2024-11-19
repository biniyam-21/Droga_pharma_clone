import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: require("./locals/en/translations.json"),
    },
    amh: {
      translations: require("./locals/amh/translations.json"),
    },
    oro: {
      translations: require("./locals/oro/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "amh", "oro"];

export default i18n;
