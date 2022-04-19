import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CategoryProvider } from "./context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
