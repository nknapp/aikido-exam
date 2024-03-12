/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      sourcemap: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "src/": "/src/",
        "scripts/": "/scripts/",
      },
    },
    test: {
      globals: true,
      setupFiles: ["src/setupTests.ts"],
    },
  };
});
