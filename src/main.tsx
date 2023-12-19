import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "./index.css";
import { AppRouter } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
