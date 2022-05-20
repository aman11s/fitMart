import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import {
  addWishlistHandler,
  removeFromCartHandler,
  updateCartQtyHandler,
} from "../../services";
import { isAlreadyInWishlist } from "../../utils";
import { ShadowLoader } from "../ShadowLoader/ShadowLoader";

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

  const [shadowPageLoader, setShadowPageLoader] = useState(false);
  const [wishlistDisable, setWishlistDisable] = useState(false);
  const [cartDisable, setCartDisable] = useState(false);

  const navigate = useNavigate();

  const inWishlist = isAlreadyInWishlist(wishlist, cartItems);

  return (
    <>
      {shadowPageLoader && <ShadowLoader />}
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
            {qty === 1 ? (
              <button
                onClick={() =>
                  removeFromCartHandler({
                    cartItems,
                    token,
                    cartDispatch,
                    removeCartFlag: true,
                    setCartDisable,
                  })
                }
                className="btn-icon pl-1 minus-icon bx bx-trash"
                disabled={cartDisable}
              ></button>
            ) : (
              <button
                onClick={() =>
                  updateCartQtyHandler({
                    cartItems,
                    token,
                    actionType: "decrement",
                    cartDispatch,
                    setShadowPageLoader,
                  })
                }
                className="btn-icon pl-1 minus-icon bx bx-minus-circle"
              ></button>
            )}
            <span className="mx-1 product-quantity-num">{qty}</span>
            <button
              onClick={() =>
                updateCartQtyHandler({
                  cartItems,
                  token,
                  actionType: "increment",
                  cartDispatch,
                  setShadowPageLoader,
                })
              }
              className="btn-icon plus-icon bx bx-plus-circle"
            ></button>
          </div>
          <div className="card-horizontal-button">
            <button
              onClick={() => {
                if (inWishlist) {
                  return toast.error("Already in Wishlist");
                }
                addWishlistHandler({
                  token,
                  product: cartItems,
                  wishlistDispatch,
                  navigate,
                  setWishlistDisable,
                });
                removeFromCartHandler({
                  cartItems,
                  token,
                  cartDispatch,
                  removeCartFlag: false,
                });
              }}
              className="btn card-btn secondary-solid-btn"
              disabled={wishlistDisable}
            >
              Move to wishlist
            </button>

            <button
              onClick={() => {
                removeFromCartHandler({
                  cartItems,
                  token,
                  cartDispatch,
                  removeCartFlag: true,
                  setCartDisable,
                });
              }}
              className="btn card-btn secondary-outline-btn"
              disabled={cartDisable}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
