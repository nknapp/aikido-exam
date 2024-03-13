module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-console": "warn",
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
  ],
};
