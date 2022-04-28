import React from "react";
import { useFilter } from "../../context";
import { category } from "../../utils";
import { FILTER_ACTIONS } from "../../utils/Actions";

export const CategoryFilter = () => {
  const {
    state: { categories },
    dispatch,
  } = useFilter();

  return (
    <>
      <div className="filter-section">
        <h5 className="h5 mb-2 pt-5">Category</h5>
        {category.map(({ id, category }) => {
          return (
            <label key={id} className="my-1">
              <input
                onChange={(e) =>
                  dispatch({
                    type: FILTER_ACTIONS.CATEGORY,
                    payload: { category: e.target.value },
                  })
                }
                type="checkbox"
                name={category}
                id={category}
                value={category}
                checked={categories.includes(category)}
              />{" "}
              {category}
            </label>
          );
        })}
      </div>
    </>
  );
};
