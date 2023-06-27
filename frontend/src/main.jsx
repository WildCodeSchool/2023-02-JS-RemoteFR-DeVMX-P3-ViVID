import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserExport from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserExport.ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserExport.ContextProvider>
  </React.StrictMode>
);
