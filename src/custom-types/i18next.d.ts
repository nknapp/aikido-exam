import "react-i18next";
import { TranslationSchema } from "src/i18n/translations/schema";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationSchema;
    };
  }
}
