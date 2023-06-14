import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter.tsx";
import PokemonProvider from "./context/PokemonProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PokemonProvider>
      <RouterProvider router={AppRouter} />
    </PokemonProvider>
  </React.StrictMode>
);
