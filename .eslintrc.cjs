module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-console": "warn",
    "no-restricted-imports": ["error", "vitest-preview"],
    "no-restricted-syntax": [
      "error",
      {
        selector: "CallExpression[callee.name='showMe']",
        message: "Remove 'showMe' before commit",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^[iI]gnored",
        caughtErrorsIgnorePattern: "^[iI]gnored",
      },
    ],
  },
  overrides: [
    {
      files: ["src/i18n/translations/*.ts"],
      rules: {
        "sort-keys": "warn",
      },
    },
    {
      files: ["src/**/*.d.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["scripts/**/*"],
      env: { node: true },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    {
      files: ["src/core/**/*"],
      excludedFiles: ["*.manual-test.tsx"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["@/**/*"],
                message: "Imports from core to outside core are not allowed",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/core/test-utils/matchers/*.types.d.ts"],
      rules: {
        "@typescript-eslint/no-empty-object-type": ["off"],
      },
    },
  ],
};
