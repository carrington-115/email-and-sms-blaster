import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import appContext from "./app/state";
import appState from "./app/stateData";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <appContext.Provider value={appState}>
      <App />
    </appContext.Provider>
  </React.StrictMode>
);
