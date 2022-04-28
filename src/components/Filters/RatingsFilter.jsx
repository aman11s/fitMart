import React from "react";
import { useFilter } from "../../context";
import { FILTER_ACTIONS } from "../../utils/Actions";

export const RatingsFilter = () => {
  const {
    state: { ratings },
    dispatch,
  } = useFilter();

  return (
    <>
      <div className="filter-section">
        <h5 className="h5 mb-2 pt-5">Rating</h5>
        <label className="my-1" htmlFor="4-stars-&-above">
          <input
            onChange={() =>
              dispatch({
                type: FILTER_ACTIONS.RATINGS,
                payload: { rating: "4-AND-ABOVE" },
              })
            }
            type="radio"
            name="rating"
            id="4-stars-&-above"
            checked={ratings === "4-AND-ABOVE"}
          />{" "}
          4 stars & above
        </label>
        <label className="my-1" htmlFor="3-stars-&-above">
          <input
            onChange={() =>
              dispatch({
                type: FILTER_ACTIONS.RATINGS,
                payload: { rating: "3-AND-ABOVE" },
              })
            }
            type="radio"
            name="rating"
            id="3-stars-&-above"
            checked={ratings === "3-AND-ABOVE"}
          />{" "}
          3 stars & above
        </label>
        <label className="my-1" htmlFor="2-stars-&-above">
          <input
            onChange={() =>
              dispatch({
                type: FILTER_ACTIONS.RATINGS,
                payload: { rating: "2-AND-ABOVE" },
              })
            }
            type="radio"
            name="rating"
            id="2-stars-&-above"
            checked={ratings === "2-AND-ABOVE"}
          />{" "}
          2 stars & above
        </label>
        <label className="my-1" htmlFor="1-stars-&-above">
          <input
            onChange={() =>
              dispatch({
                type: FILTER_ACTIONS.RATINGS,
                payload: { rating: "1-AND-ABOVE" },
              })
            }
            type="radio"
            name="rating"
            id="1-stars-&-above"
          />{" "}
          1 stars & above
        </label>
      </div>
    </>
  );
};
