import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishlist } from "../../context";
import { addWishlistHandler } from "../../services";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { title, ratings, price, imgSrc, imgAlt } = product;

  const {
    userData: { token },
  } = useAuth();

  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  return (
    <>
      <div className="vertical-card auto-width">
        <div className="card-header">
          <div className="card-img-container">
            <img className="card-img" src={imgSrc} alt={imgAlt} />
            <span
              onClick={() =>
                addWishlistHandler({
                  token,
                  product,
                  wishlistDispatch,
                  navigate,
                })
              }
              className="card-wishlist-icon product-wishlist-icon bx bx-heart"
            ></span>
          </div>
        </div>
        <div className="card-body">
          <div className="item-price">Rs. {price}</div>
          <div className="card-description">{title}</div>
        </div>
        <div className="card-footer">
          <span className="container-flex-align-center rating mb-2">
            <i className="bx bxs-star"></i>
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
