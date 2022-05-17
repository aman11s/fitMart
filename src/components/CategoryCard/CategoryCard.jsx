import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context";
import { FILTER_ACTIONS } from "../../utils/Actions";

export const CategoryCard = ({ category }) => {
  const { categoryName, imgSrc, alt } = category;

  const { dispatch: filterDispatch } = useFilter();

  const navigate = useNavigate();

  const categoryCardClickHandler = (category) => {
    navigate("/products");
    switch (category) {
      case "Whey Protein":
        return filterDispatch({
          type: FILTER_ACTIONS.CATEGORY,
          payload: { category: "protein" },
        });

      case "Creatine":
        return filterDispatch({
          type: FILTER_ACTIONS.CATEGORY,
          payload: { category: "creatine" },
        });

      case "Gainer":
        return filterDispatch({
          type: FILTER_ACTIONS.CATEGORY,
          payload: { category: "gainer" },
        });

      case "Multivitamins":
        return filterDispatch({
          type: FILTER_ACTIONS.CATEGORY,
          payload: { category: "multivitamin" },
        });

      default:
        break;
    }
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
