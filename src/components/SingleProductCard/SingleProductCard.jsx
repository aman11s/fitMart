import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { addToCartHandler, addWishlistHandler } from "../../services";
import {
  isAlreadyInCart,
  isAlreadyInWishlist,
  trumpCardObj,
} from "../../utils";
import "./SingleProductCard.css";

export const SingleProductCard = ({ singleProduct }) => {
  const { imgSrc, imgAlt, price, ratings, title } = singleProduct;

  const navigate = useNavigate();

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

  const inWishlist = isAlreadyInWishlist(wishlist, singleProduct);
  const inCart = isAlreadyInCart(cart, singleProduct);

  const [wishlistDisable, setWishlistDisable] = useState(false);
  const [cartDisable, setCartDisable] = useState(false);

  return (
    <>
      <div className="single-product-card">
        <div className="product-card-img">
          <img className="img-responsive" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="product-card-details">
          <div className="product-title fw-800">{title}</div>
          <div className="container-flex-align-center fw-600 pt-1">
            <i className="bx bxs-star"></i>
            {ratings} / 5
          </div>
          <div className="pt-1 product-price fw-700">Rs. {price}</div>
          <div className="des fw-700">Inclusive of all taxes</div>

          <hr />

          {trumpCardObj.map((card) => {
            const { imgSrc, alt, title, id } = card;
            return (
              <div key={id} className="container-flex-align-center py-1">
                <img className="product-trump-img " src={imgSrc} alt={alt} />
                <span className="pl-1">{title}</span>
              </div>
            );
          })}

          <div className="product-card-btn my-2">
            <button
              onClick={() => {
                if (inCart) {
                  return toast.error("Already in Cart");
                }
                addToCartHandler({
                  token,
                  product: singleProduct,
                  cartDispatch,
                  navigate,
                  setCartLoader: setCartDisable,
                });
              }}
              className="btn primary-solid-btn mr-1"
              disabled={cartDisable}
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                if (inWishlist) {
                  return toast.error("Already in Wishlist");
                }
                addWishlistHandler({
                  token,
                  product: singleProduct,
                  wishlistDispatch,
                  navigate,
                  setWishlistDisable,
                });
              }}
              className="btn primary-outline-btn"
              disabled={wishlistDisable}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
