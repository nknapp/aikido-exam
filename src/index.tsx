/* eslint-disable no-console */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { initI18Next } from "./i18n/i18n";
import i18n from "i18next";

initI18Next().catch(console.error);
document.title = i18n.t("app.title");

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
