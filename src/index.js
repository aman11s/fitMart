import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CategoryProvider } from "./context";
import { ProductProvider } from "./context/products-context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
