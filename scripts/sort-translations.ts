import fs from "node:fs/promises";
import prettier from "prettier";

for (const file of process.argv.slice(2)) {
  const translations = JSON.parse(await fs.readFile(file, "utf-8"));
  const sortedTranslations = Object.fromEntries(
    Object.entries(translations).toSorted((a, b) => {
      return a[0].localeCompare(b[0]);
    }),
  );

  await fs.writeFile(file, await prettier.format(JSON.stringify(sortedTranslations, null, 2), { parser: "json" }));
}
