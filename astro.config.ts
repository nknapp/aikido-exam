import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";
import { languages } from "./src/i18n/server";
import solidSvg from "vite-plugin-solid-svg";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [solidSvg()],
    server: {
      watch: {
        ignored: ["**/*.test.ts", "**/*.test-helper.ts", "src/core/test-utils"],
      },
    },
  },
  integrations: [tailwind(), solidJs()],
  i18n: {
    defaultLocale: "de",
    locales: languages,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
