// WARNING: Also have a look into astro-i18n.config.ts when adding new languages.
const translationFiles = import.meta.glob<Record<string, string>>("./common/*.json", {
  eager: true,
  import: "default",
});
const translations = Object.fromEntries(
  Object.entries(translationFiles).map(([key, value]) => {
    return [key.replace(/\.\/common\/(\w+)\.json/, "$1"), value];
  }),
);

export const languages = Object.keys(translations);
export function getTranslation(lang: string) {
  return translations[lang];
}
