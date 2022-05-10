import React from "react";

export const CategoryCard = ({ category }) => {
  const { categoryName, imgSrc, alt } = category;
  return (
    <>
      <div className="category-item radius-5 p-2">
        <h2 className="h2 container-flex-center category-text">
          {categoryName}
        </h2>
        <img className="img-responsive" src={imgSrc} alt={alt} />
      </div>
    </>
  );
};
