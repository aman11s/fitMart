import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import {
  addToCartHandler,
  addWishlistHandler,
  removerWishlistHandler,
} from "../../services";
import { isAlreadyInWishlist } from "../../utils";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { title, ratings, price, imgSrc, imgAlt } = product;

  const {
    userData: { token },
  } = useAuth();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const { cartDispatch } = useCart();

  const navigate = useNavigate();

  const inWishlist = isAlreadyInWishlist(wishlist, product);

  return (
    <>
      <div className="vertical-card auto-width">
        <div className="card-header">
          <div className="card-img-container">
            <img className="card-img" src={imgSrc} alt={imgAlt} />
            <span
              onClick={() =>
                inWishlist
                  ? removerWishlistHandler({
                      token,
                      product,
                      wishlist,
                      wishlistDispatch,
                      navigate,
                    })
                  : addWishlistHandler({
                      token,
                      product,
                      wishlistDispatch,
                      navigate,
                    })
              }
              className={`card-wishlist-icon product-wishlist-icon bx ${
                inWishlist ? "bxs-heart" : "bx-heart"
              }`}
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
          <button
            onClick={() =>
              addToCartHandler({ token, product, cartDispatch, navigate })
            }
            className="btn card-btn primary-solid-btn primary-btn-text-icon"
          >
            <i className="btn-icon bx bxs-bolt"></i>Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
