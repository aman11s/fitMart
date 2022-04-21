import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Loader, ProductCard, Sidebar } from "../../components";
import { useProducts } from "../../context";
import { PRODUCTS_ACTIONS } from "../../utils/Actions/product-actions";

export const Products = () => {
  const { state, dispatch } = useProducts();
  const { products, productLoader } = state;

  useEffect(() => {
    (async () => {
      dispatch({
        type: PRODUCTS_ACTIONS.SHOW_LOADER,
        payload: { productLoader: true },
      });
      try {
        const { data, status } = await axios.get("/api/products");
        dispatch({
          type: PRODUCTS_ACTIONS.SHOW_LOADER,
          payload: { productLoader: false },
        });
        if (status === 200) {
          dispatch({
            type: PRODUCTS_ACTIONS.INITIALIZE_PRODUCTS,
            payload: { products: data.products },
          });
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <div className="grid-page-layout">
        <Sidebar />
        <main className="main-container">
          <h4 className="h4 mt-3 mx-3">Showing All Products</h4>
          {productLoader && <Loader />}
          <div className="grid-minmax-card p-2">
            {products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};
