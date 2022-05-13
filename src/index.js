import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  AuthProvider,
  CategoryProvider,
  ProductProvider,
  FilterProvider,
  WishlistProvider,
} from "./context";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CategoryProvider>
          <WishlistProvider>
            <FilterProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </FilterProvider>
          </WishlistProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
