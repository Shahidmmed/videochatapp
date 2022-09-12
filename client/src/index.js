import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons.min.js";
import UIkit from "uikit";

UIkit.use(Icons);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
