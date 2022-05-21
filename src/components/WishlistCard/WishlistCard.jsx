import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { addToCartHandler, removerWishlistHandler } from "../../services";
import { isAlreadyInCart } from "../../utils";
import toast from "react-hot-toast";

export const WishlistCard = ({ wishlistItems }) => {
  const { imgSrc, imgAlt, price, title, ratings } = wishlistItems;
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    userData: { token },
  } = useAuth();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const navigate = useNavigate();

  const [wishlistDisable, setWishlistDisable] = useState(false);

  const inCart = isAlreadyInCart(cart, wishlistItems);

  return (
    <>
      <div className="vertical-card auto-width">
        <div className="card-header">
          <div className="card-img-container">
            <img className="card-img" src={imgSrc} alt={imgAlt} />
            <button
              onClick={() => {
                const product = wishlistItems;
                removerWishlistHandler({
                  token,
                  product,
                  wishlist,
                  wishlistDispatch,
                  navigate,
                  removeWishlistFlag: true,
                  setWishlistDisable,
                });
              }}
              className="btn-icon card-wishlist-icon product-wishlist-icon bx bxs-heart"
              disabled={wishlistDisable}
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
          <button
            onClick={() => {
              if (inCart) {
                return toast.error("Already in Cart");
              }

              addToCartHandler({
                token,
                product: wishlistItems,
                cartDispatch,
                navigate,
              });
              removerWishlistHandler({
                token,
                product: wishlistItems,
                wishlist,
                wishlistDispatch,
                navigate,
                removeWishlistFlag: false,
                setWishlistDisable,
              });
            }}
            className="btn card-btn primary-solid-btn primary-btn-text-icon"
            disabled={wishlistDisable}
          >
            <i className="btn-icon bx bxs-right-arrow-alt"></i>Move to cart
          </button>
        </div>
      </div>
    </>
  );
};
