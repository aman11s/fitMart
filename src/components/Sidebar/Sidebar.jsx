import React from "react";
import "./Sidebar.css";
import { FILTER_ACITONS } from "../../utils/Actions/filter-actions";
import { useFilter } from "../../context/filter-context";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const {
    state: { sortBy },
    dispatch,
  } = useFilter();

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
            <button className="btn secondary-solid-btn">Clear</button>
          </div>

          <h5 className="h5 pt-5">Price</h5>
          <div className="pt-2 space-between">
            <span>100</span>
            <span>5000</span>
            <span>10000</span>
          </div>
          <input
            type="range"
            className="slider"
            min="100"
            max="10000"
            // value="7000"
          />

          <div className="filter-section">
            <h5 className="h5 mb-2 pt-5">Category</h5>
            <label className="my-1" htmlFor="protein">
              <input type="checkbox" name="protein" id="protein" /> Proteins
            </label>
            <label className="my-1" htmlFor="gainer">
              <input type="checkbox" name="gainer" id="gainer" /> Gainers
            </label>
            <label className="my-1" htmlFor="pre-post-workout">
              <input
                type="checkbox"
                name="pre-post-workout"
                id="pre-post-workout"
              />{" "}
              Pre/ Post workout
            </label>
            <label className="my-1" htmlFor="multivitamins">
              <input type="checkbox" name="multivitamins" id="multivitamins" />{" "}
              Multivitamins
            </label>
          </div>

          <div className="filter-section">
            <h5 className="h5 mb-2 pt-5">Rating</h5>
            <label className="my-1" htmlFor="4-stars-&-above">
              <input type="radio" name="rating" id="4-stars-&-above" /> 4 stars
              & above
            </label>
            <label className="my-1" htmlFor="3-stars-&-above">
              <input type="radio" name="rating" id="3-stars-&-above" /> 3 stars
              & above
            </label>
            <label className="my-1" htmlFor="2-stars-&-above">
              <input type="radio" name="rating" id="2-stars-&-above" /> 2 stars
              & above
            </label>
            <label className="my-1" htmlFor="1-stars-&-above">
              <input type="radio" name="rating" id="1-stars-&-above" /> 1 stars
              & above
            </label>
          </div>

          <div className="filter-section">
            <h5 className="h5 mb-2 pt-5">Sort by</h5>
            <label className="my-1" htmlFor="price-low-to-high">
              <input
                onChange={() =>
                  dispatch({
                    type: FILTER_ACITONS.SORT_BY,
                    payload: { sortBy: "LOW-TO-HIGH" },
                  })
                }
                type="radio"
                name="sort"
                id="price-low-to-high"
                checked={sortBy === "LOW-TO-HIGH"}
              />{" "}
              Price - Low to High
            </label>
            <label className="my-1" htmlFor="price-high-to-low">
              <input
                onChange={() =>
                  dispatch({
                    type: FILTER_ACITONS.SORT_BY,
                    payload: { sortBy: "HIGH-TO-LOW" },
                  })
                }
                type="radio"
                name="sort"
                id="price-high-to-low"
                checked={sortBy === "HIGH-TO-LOW"}
              />{" "}
              Price - High to Low
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};
