import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AppProvider} />
  </React.StrictMode>
);
