import React from "react";
import { useFilter, useProducts } from "../../context";
import { FILTER_ACTIONS } from "../../utils/Actions";

export const PriceRangeFilter = () => {
  const {
    state: { productMinPrice, productMaxPrice },
  } = useProducts();
  const {
    state: { priceRange },
    dispatch: filterDispatch,
  } = useFilter();
  return (
    <>
      <h5 className="h5 pt-5">Price</h5>
      <div className="pt-2 space-between">
        <span>{productMinPrice}</span>
        <span>5000</span>
        <span>{productMaxPrice}</span>
      </div>
      <input
        onInput={(e) =>
          filterDispatch({
            type: FILTER_ACTIONS.PRICE_RANGE,
            payload: { priceRange: Number(e.target.value) },
          })
        }
        type="range"
        className="slider"
        min={productMinPrice}
        max={productMaxPrice}
        value={priceRange}
      />
    </>
  );
};
