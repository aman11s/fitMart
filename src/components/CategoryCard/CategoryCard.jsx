import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter, useProducts } from "../../context";
import { getMinMaxPrice } from "../../utils";
import { FILTER_ACTIONS } from "../../utils/Actions";

const categoryDictionary = {
  "Whey Protein": "protein",
  Creatine: "creatine",
  Gainer: "gainer",
  Multivitamins: "multivitamin",
};

export const CategoryCard = ({ category }) => {
  const { categoryName, imgSrc, alt } = category;

  const { dispatch: filterDispatch } = useFilter();
  const {
    state: { products },
  } = useProducts();

  const navigate = useNavigate();

  const { maxPrice } = getMinMaxPrice(products);

  const categoryCardClickHandler = (category) => {
    filterDispatch({
      type: FILTER_ACTIONS.CLEAR_FILTER,
      payload: { priceRange: maxPrice },
    });
    filterDispatch({
      type: FILTER_ACTIONS.CATEGORY,
      payload: { category: categoryDictionary[category] },
    });

    navigate("/products");
  };

  return (
    <>
      <div
        onClick={() => categoryCardClickHandler(categoryName)}
        className="category-item radius-5 p-2"
      >
        <h2 className="h2 container-flex-center category-text">
          {categoryName}
        </h2>
        <img className="img-responsive" src={imgSrc} alt={alt} />
      </div>
    </>
  );
};
