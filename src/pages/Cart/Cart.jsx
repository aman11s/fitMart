import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../context";
import { CART_ACTIONS } from "../../utils/Actions";
import "../Wishlist/Wishlist.css";
import { CartCard, CartDetails, Loader } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Cart = () => {
  useDocumentTitle("Cart");
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    userData: { token },
  } = useAuth();

  const [cartPageLoader, setCartPageLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setCartPageLoader(true);
      try {
        const { status, data } = await axios({
          method: "GET",
          url: "/api/user/cart",
          headers: { authorization: token },
        });
        if (status === 200) {
          cartDispatch({
            type: CART_ACTIONS.SHOW_CART_ITEMS,
            payload: { show_cart_items: data.cart },
          });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setCartPageLoader(false);
      }
    })();
  }, [token, cartDispatch]);

  return (
    <>
      {cart.length ? (
        <>
          {cartPageLoader ? (
            <main className="empty-wishlist">
              <Loader />
            </main>
          ) : (
            <main className="main-min-height">
              <h4 className="h4 mt-5 text-center mx-3">
                My Cart ({cart.length})
              </h4>
              <div className="cart-wrapper">
                <div className="cart-items gap-3 px-3 py-4 container-flex-justify-center">
                  {cart.map((cartItems) => {
                    return (
                      <CartCard key={cartItems._id} cartItems={cartItems} />
                    );
                  })}
                </div>

                <div className="cart-details container-flex-center px-3 py-4">
                  <CartDetails />
                </div>
              </div>
            </main>
          )}
        </>
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
