import React from "react";

export const ProductCard = ({ product }) => {
  const { title, ratings, price, imgSrc, imgAlt } = product;
  return (
    <>
      <div className="vertical-card auto-width">
        <div className="card-header">
          <div className="card-img-container">
            <img className="card-img" src={imgSrc} alt={imgAlt} />
            <i className="card-wishlist-icon product-wishlist-icon bx bx-heart"></i>
          </div>
        </div>
        <div className="card-body">
          <div className="item-price">Rs. {price}</div>
          <div className="card-description">{title}</div>
        </div>
        <div className="card-footer">
          <button className="btn card-btn primary-outline-btn primary-btn-text-icon">
            <i className="btn-icon bx bxs-cart"></i>Add to cart
          </button>

          <button className="btn card-btn primary-solid-btn primary-btn-text-icon">
            <i className="btn-icon bx bxs-bolt"></i>Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
