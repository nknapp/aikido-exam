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
      files: "src/i18n/translations/*.ts",
      rules: {
        "sort-keys": "warn",
      },
    },
    {
      files: "scripts/**/*",
      env: { node: true },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
