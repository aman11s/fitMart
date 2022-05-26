import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth, useCart, useWishlist } from "../../context";
import {
  addToCartHandler,
  addWishlistHandler,
  removerWishlistHandler,
} from "../../services";
import { isAlreadyInCart, isAlreadyInWishlist } from "../../utils";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { _id, title, ratings, price, imgSrc, imgAlt } = product;

  const {
    userData: { token },
  } = useAuth();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const [cartLoader, setCartLoader] = useState(false);
  const [wishlistDisable, setWishlistDisable] = useState(false);

  const navigate = useNavigate();

  const inWishlist = isAlreadyInWishlist(wishlist, product);
  const inCart = isAlreadyInCart(cart, product);

  return (
    <>
      <div className="vertical-card auto-width">
        <div className="card-header">
          <div className="card-img-container">
            <img
              onClick={() => navigate(`/products/${_id}`)}
              className="card-img card-img-click"
              src={imgSrc}
              alt={imgAlt}
            />
            <button
              onClick={() =>
                inWishlist
                  ? removerWishlistHandler({
                      token,
                      product,
                      wishlist,
                      wishlistDispatch,
                      navigate,
                      removeWishlistFlag: true,
                      setWishlistDisable,
                    })
                  : addWishlistHandler({
                      token,
                      product,
                      wishlistDispatch,
                      navigate,
                      setWishlistDisable,
                    })
              }
              disabled={wishlistDisable}
              className={`btn-icon card-wishlist-icon product-wishlist-icon bx ${
                inWishlist ? "bxs-heart" : "bx-heart"
              }`}
            ></button>
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

          {inCart ? (
            <button
              onClick={() => navigate("/cart")}
              className="btn card-btn primary-btn-text-icon go-to-cart-btn"
            >
              <i className="btn-icon bx bxs-right-arrow-alt"></i>Go to cart
            </button>
          ) : (
            <button
              onClick={() =>
                addToCartHandler({
                  token,
                  product,
                  cartDispatch,
                  navigate,
                  setCartLoader,
                })
              }
              className="btn card-btn primary-solid-btn primary-btn-text-icon"
              disabled={cartLoader}
            >
              {cartLoader ? (
                <ClipLoader
                  color={"#fff"}
                  loading={cartLoader}
                  speedMultiplier={2}
                  size={20}
                />
              ) : (
                <span className="primary-btn-text-icon">
                  <i className="btn-icon bx bxs-bolt"></i>Buy Now
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
