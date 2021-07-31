module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "react-app/jest",
  ],
  overrides: [
    {
      files: "src/i18n/translations/*.ts",
      rules: {
        "sort-keys": "warn",
      },
    },
  ],
};
