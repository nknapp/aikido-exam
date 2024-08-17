import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { languages } from "./src/i18n/server";
import solidSvg from "vite-plugin-solid-svg";

import mdx from "@astrojs/mdx";

process.env.VITE_BUILD_DATE = new Date().toISOString();

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [
      solidSvg({
        defaultAsComponent: false,
      }),
    ],
    server: {
      watch: {
        ignored: ["**/*.test.ts", "**/*.test-helper.ts", "src/core/test-utils"],
      },
    },
  },
  integrations: [tailwind(), solidJs(), mdx()],
  i18n: {
    defaultLocale: "de",
    locales: languages,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
