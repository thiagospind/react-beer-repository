import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "./index.css";
import { BeerApp } from "./components/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BeerApp />
  </React.StrictMode>
);
