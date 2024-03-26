import type { TranslationSchema } from "@/i18n/TranslationSchema.ts";
import { t as astroT } from "astro-i18n";

// WARNING: Also have a look into astro-i18n.config.ts when adding new languages.

export function t(key: keyof TranslationSchema): string {
  return astroT(key);
}
