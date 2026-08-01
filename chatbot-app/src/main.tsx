import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import "./styles/global.css";
import "./styles/dashboard.css";
import "./styles/sidebar.css";
import "./styles/hero.css";
import "./styles/chat.css";
import "./styles/cards.css";
import "./styles/animations.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);