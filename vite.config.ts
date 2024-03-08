/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react()],
    resolve: {
      alias: {
        "src/": "/src/",
        "@/": "/src/",
        "$core/": "/src/core/",
        "scripts/": "/scripts/",
      },
    },
    test: {
      globals: true,
      setupFiles: ["src/setupTests.ts"],
      environment: "jsdom",
    },
  };
});
