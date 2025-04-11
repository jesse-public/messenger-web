import React from "react";
import { createRoot } from "react-dom/client";
import App from "../components/App";

export const bootstrap = async (): Promise<void> => {
  document.body.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif";
  document.body.style.margin = "0";
  document.body.style.padding = "0";

  const element = document.createElement("div");
  document.body.appendChild(element);

  const AppElement = React.createElement(App);
  const root = createRoot(element);
  root.render(AppElement);
};
