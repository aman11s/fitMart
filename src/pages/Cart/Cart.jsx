import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import "../Wishlist/Wishlist.css";
import { CartCard, CartDetails } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Cart = () => {
  useDocumentTitle("Cart");
  const {
    cartState: { cart },
  } = useCart();

  const navigate = useNavigate();

  return (
    <>
      {cart.length ? (
        <main className="main-min-height">
          <h4 className="h4 mt-5 text-center mx-3">My Cart ({cart.length})</h4>
          <div className="cart-wrapper">
            <div className="cart-items gap-3 px-3 py-4 container-flex-justify-center">
              {cart.map((cartItems) => {
                return <CartCard key={cartItems._id} cartItems={cartItems} />;
              })}
            </div>

            <div className="cart-details container-flex-center px-3 py-4">
              <CartDetails />
            </div>
          </div>
        </main>
      ) : (
        <main className="empty-wishlist">
          <h4 className="h4 pb-3">Your cart is empty</h4>
          <button
            onClick={() => navigate("/products")}
            className="btn primary-solid-btn"
          >
            Start Shopping
          </button>
        </main>
      )}
    </>
  );
};
