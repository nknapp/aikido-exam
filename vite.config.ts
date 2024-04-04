import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";
import { configDefaults } from "vitest/config";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [solidPlugin(), solidSvg()],
    resolve: {
      alias: {
        "src/": "/src/",
        "@/": "/src/",
        "$core/": "/src/core/",
        "scripts/": "/scripts/",
      },
    },
    test: {
      css: true,
      globals: true,
      exclude: [...configDefaults.exclude, "e2e-tests/**"],
      setupFiles: ["src/setupTests.ts"],
      environment: "jsdom",
      environmentOptions: {
        jsdom: {
          url: "http://localhost/",
        },
      },
    },
  };
});
