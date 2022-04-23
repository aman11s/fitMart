import React from "react";
import "./ProductCard.css";

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
          <span className="container-flex-align-center rating mb-2">
            <i class="bx bxs-star"></i>
            {ratings} / 5
          </span>
          <button className="btn card-btn primary-solid-btn primary-btn-text-icon">
            <i className="btn-icon bx bxs-bolt"></i>Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
