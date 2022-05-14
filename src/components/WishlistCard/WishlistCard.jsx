import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishlist } from "../../context";
import { removerWishlistHandler } from "../../services";
import { isAlreadyInWishlist } from "../../utils";

export const WishlistCard = ({ wishlistItems }) => {
  const { imgSrc, imgAlt, price, title, ratings } = wishlistItems;
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    userData: { token },
  } = useAuth();
  const navigate = useNavigate();

  const inWishlist = isAlreadyInWishlist(wishlist, wishlistItems);
  return (
    <>
      <div className="vertical-card auto-width">
        <div className="card-header">
          <div className="card-img-container">
            <img className="card-img" src={imgSrc} alt={imgAlt} />
            <span
              onClick={() => {
                const product = wishlistItems;
                removerWishlistHandler({
                  token,
                  product,
                  wishlist,
                  wishlistDispatch,
                  navigate,
                });
              }}
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
          <button className="btn card-btn primary-solid-btn primary-btn-text-icon">
            <i className="btn-icon bx bxs-right-arrow-alt"></i>Move to cart
          </button>
        </div>
      </div>
    </>
  );
};