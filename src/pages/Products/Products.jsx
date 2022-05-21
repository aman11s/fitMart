import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Loader, ProductCard, Sidebar } from "../../components";
import { useProducts } from "../../context";
import { useFilter } from "../../context/filter-context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import {
  filterByCategories,
  filterByPriceRange,
  filterByRatings,
  filterBySort,
  getMinMaxPrice,
} from "../../utils";
import { FILTER_ACTIONS } from "../../utils/Actions";
import { PRODUCTS_ACTIONS } from "../../utils/Actions/product-actions";
import "./Products.css";

export const Products = () => {
  useDocumentTitle("Products");
  const {
    state: { products, productLoader },
    dispatch,
  } = useProducts();
  const [showSidebar, setShowSidebar] = useState(false);
  const {
    state: { sortBy, ratings, categories, priceRange },
    dispatch: filterDispatch,
  } = useFilter();

  const filteredBySort = filterBySort(products, sortBy);
  const filteredByRatings = filterByRatings(filteredBySort, ratings);
  const filteredByCategories = filterByCategories(
    filteredByRatings,
    categories
  );
  const filteredProducts = filterByPriceRange(filteredByCategories, priceRange);

  useEffect(() => {
    if (!products.length) {
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
            const { minPrice, maxPrice } = getMinMaxPrice(data.products);
            dispatch({
              type: PRODUCTS_ACTIONS.INITIALIZE_PRODUCTS,
              payload: { products: data.products, minPrice, maxPrice },
            });
            filterDispatch({
              type: FILTER_ACTIONS.PRICE_RANGE,
              payload: { priceRange: maxPrice },
            });
          }
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [dispatch, products, filterDispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid-page-layout">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="main-container">
          <h4 className="h4 mt-3 mx-3">Showing All Products</h4>
          {productLoader && <Loader />}
          <div className="grid-minmax-card p-2">
            {filteredProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </main>
      </div>
      <button
        onClick={() => setShowSidebar(true)}
        className="small-text p-2 filter-btn"
      >
        Add filter & sort
      </button>
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="drop-shadow"
        ></div>
      )}
    </>
  );
};
