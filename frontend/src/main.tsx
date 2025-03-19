import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToSection from "./utils/ScrollToSection";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToSection />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
