/* eslint-disable no-console */
import fs from "node:fs/promises";
import prettier from "prettier";
import { fileURLToPath } from "url";

const urls = import.meta.glob<string>("../src/i18n/**/*.json", { query: "url", eager: true, import: "default" });
console.log("Files found:", Object.keys(urls));
const files = Object.keys(urls).map((file) => fileURLToPath(new URL(file, import.meta.url)));

for (const file of files) {
  const translations = JSON.parse(await fs.readFile(file, "utf-8"));
  const sortedTranslations = Object.fromEntries(
    Object.entries(translations).toSorted((a, b) => {
      return a[0].localeCompare(b[0]);
    }),
  );

  console.log(`Sorting ${file}`);
  await fs.writeFile(file, await prettier.format(JSON.stringify(sortedTranslations, null, 2), { parser: "json" }));
}
