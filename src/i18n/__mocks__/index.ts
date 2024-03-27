import type { TranslationSchema } from "@/i18n/TranslationSchema.ts";
import en from "../common/en.json";

export function t(key: keyof TranslationSchema): string {
  return en[key];
}
