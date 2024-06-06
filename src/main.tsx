import { NextUIProvider } from "@nextui-org/react";
import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n.ts";
import "./index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const savedLanguage = localStorage.getItem("language");

if (savedLanguage) {
  i18next.changeLanguage(savedLanguage);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
