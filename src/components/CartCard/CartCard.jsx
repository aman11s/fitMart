import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { addWishlistHandler, removeFromCartHandler } from "../../services";
import { isAlreadyInWishlist } from "../../utils";

export const CartCard = ({ cartItems }) => {
  const { title, price, qty, imgAlt, imgSrc } = cartItems;

  const {
    userData: { token },
  } = useAuth();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const { cartDispatch } = useCart();

  const navigate = useNavigate();

  const inWishlist = isAlreadyInWishlist(wishlist, cartItems);

  return (
    <>
      <div className="card card-horizontal">
        <div className="card-img-container">
          <img className="card-img" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="card-horizontal-details">
          <div className="card-description">{title}</div>
          <div className="pt-1 item-price-desc">
            <span className="item-price">Rs. {price}</span>
          </div>
          <div className="py-1 product-quantity container-flex-align-center">
            Quantity:
            <i className="pl-1 minus-icon bx bx-minus-circle"></i>
            <span className="mx-1 product-quantity-num">{qty}</span>
            <i className="plus-icon bx bx-plus-circle"></i>
          </div>
          <div className="card-horizontal-button">
            <button
              onClick={() => {
                if (inWishlist) {
                  toast.error("Already in Wishlist");
                  return;
                }
                addWishlistHandler({
                  token,
                  product: cartItems,
                  wishlistDispatch,
                  navigate,
                });
                removeFromCartHandler({
                  cartItems,
                  token,
                  cartDispatch,
                  flag: true,
                });
              }}
              className="btn card-btn secondary-solid-btn disable"
            >
              Move to wishlist
            </button>

            <button
              onClick={() => {
                removeFromCartHandler({
                  cartItems,
                  token,
                  cartDispatch,
                });
              }}
              className="btn card-btn secondary-outline-btn"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
