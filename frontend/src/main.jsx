import React from "react";
import ReactDOM from "react-dom/client";

import UserExport from "./contexts/UserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserExport.ContextProvider>
      <App />
    </UserExport.ContextProvider>
  </React.StrictMode>
);
