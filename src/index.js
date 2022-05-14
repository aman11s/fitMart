import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  AuthProvider,
  CategoryProvider,
  ProductProvider,
  FilterProvider,
  WishlistProvider,
  CartProvider,
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
            <CartProvider>
              <FilterProvider>
                <ProductProvider>
                  <App />
                </ProductProvider>
              </FilterProvider>
            </CartProvider>
          </WishlistProvider>
        </CategoryProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
