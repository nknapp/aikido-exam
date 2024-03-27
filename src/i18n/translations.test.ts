const translationFiles = import.meta.glob<Record<string, string>>("./common/*.json", {
  eager: true,
  import: "default",
});
const translations = Object.fromEntries(
  Object.entries(translationFiles).map(([key, value]) => {
    return [key.replace(/\.\/common\/(\w+)\.json/, "$1"), value];
  }),
);

const languages = Object.keys(translations);

describe("i18n", () => {
  it.each(languages)("keys in '%s' are sorted", (language) => {
    const keys = Object.keys(translations[language]);
    const sortedKeys = Array.from(keys).sort();
    expect(keys).toEqual(sortedKeys);
  });

  describe("same keys", () => {
    const sortedEnKeys = Array.from(Object.keys(translations["en"])).sort();

    it.each(languages)("keys in '%s' are the same as in 'en'", (language) => {
      const sortedKeys = Array.from(Object.keys(translations[language])).sort();
      expect(sortedKeys).toEqual(sortedEnKeys);
    });
  });
});
