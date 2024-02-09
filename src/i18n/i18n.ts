import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { de } from "./translations/de";

export async function initI18Next(): Promise<void> {
  await i18n.use(initReactI18next).init({
    resources: {
      de: {
        translation: de,
      },
    },
    lng: "de",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
