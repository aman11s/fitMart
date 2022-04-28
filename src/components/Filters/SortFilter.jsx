import React from "react";
import { useFilter } from "../../context";
import { FILTER_ACTIONS } from "../../utils/Actions";

export const SortFilter = () => {
  const {
    state: { sortBy },
    dispatch,
  } = useFilter();
  return (
    <>
      <div className="filter-section">
        <h5 className="h5 mb-2 pt-5">Sort by</h5>
        <label className="my-1" htmlFor="price-low-to-high">
          <input
            onChange={() =>
              dispatch({
                type: FILTER_ACTIONS.SORT_BY,
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
                type: FILTER_ACTIONS.SORT_BY,
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
    </>
  );
};
