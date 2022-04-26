import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CategoryProvider } from "./context";
import { ProductProvider } from "./context/products-context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <FilterProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </FilterProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
