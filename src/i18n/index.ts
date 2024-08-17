import type { TranslationSchema } from "@/i18n/TranslationSchema.ts";
import { t as astroT, astroI18n } from "astro-i18n";
import type { TranslationProperties } from "astro-i18n/dist/src/core/translation/types";
import type { TranslatedText } from "$core/model/Dojo.ts";

// WARNING: Also have a look into astro-i18n.config.ts when adding new languages.

export function t(key: keyof TranslationSchema, properties?: TranslationProperties): string {
  return astroT(key, properties);
}

export function tx(text: TranslatedText): string {
  return text[astroI18n.locale] ?? text[astroI18n.fallbackLocale] ?? text["en"];
}
