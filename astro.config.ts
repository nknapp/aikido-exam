import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: ["**/*.test.ts", "**/*.test-helper.ts", "src/core/test-utils"],
      },
    },
  },
  integrations: [tailwind(), solidJs()],
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
