import React from "react";
import "./Sidebar.css";
import {
  SortFilter,
  RatingsFilter,
  CategoryFilter,
  PriceRangeFilter,
} from "../Filters";
import { useFilter, useProducts } from "../../context";
import { FILTER_ACTIONS } from "../../utils/Actions";
import { getMinMaxPrice } from "../../utils";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { dispatch } = useFilter();
  const {
    state: { products },
  } = useProducts();
  const { maxPrice } = getMinMaxPrice(products);

  return (
    <>
      <aside className="aside-container px-4 aside-height">
        <div className={`filter-container ${showSidebar && "open-transition"}`}>
          <button
            className="close-btn bx bx-x"
            onClick={() => setShowSidebar(false)}
          ></button>
          <div className="mt-5 space-between">
            <h5 className="h5">Filter</h5>
            <button
              onClick={() =>
                dispatch({
                  type: FILTER_ACTIONS.CLEAR_FILTER,
                  payload: { priceRange: maxPrice },
                })
              }
              className="btn secondary-solid-btn"
            >
              Clear
            </button>
          </div>

          <PriceRangeFilter />

          <CategoryFilter />

          <RatingsFilter />

          <SortFilter />
        </div>
      </aside>
    </>
  );
};
