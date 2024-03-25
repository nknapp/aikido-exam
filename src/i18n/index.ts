export function getTranslations() {
  return {
    de: {
      label: "Deutsch",
      translations: async () => (await import("./translations/de")).de,
    },
  };
}
