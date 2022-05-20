import axios from "axios";
import toast from "react-hot-toast";
import { CART_ACTIONS } from "../utils/Actions";

export const addToCartHandler = async ({
  token,
  product,
  cartDispatch,
  navigate,
  setCartLoader,
}) => {
  if (token) {
    try {
      setCartLoader && setCartLoader(true);
      const { status, data } = await axios({
        method: "POST",
        url: "/api/user/cart",
        headers: { authorization: token },
        data: { product },
      });
      if (status === 201) {
        toast.success("Added to Cart");
        cartDispatch({
          type: CART_ACTIONS.ADD_TO_CART,
          payload: { add_to_cart: data.cart },
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCartLoader && setCartLoader(false);
    }
  } else {
    navigate("/login");
  }
};

export const removeFromCartHandler = async ({
  cartItems,
  token,
  cartDispatch,
  removeCartFlag,
  setCartDisable,
}) => {
  try {
    setCartDisable && setCartDisable(true);
    const { status, data } = await axios({
      method: "DELETE",
      url: `/api/user/cart/${cartItems._id}`,
      headers: { authorization: token },
    });
    if (status === 200) {
      setCartDisable && setCartDisable(false);
      removeCartFlag && toast.error("Removed from Cart");
      cartDispatch({
        type: CART_ACTIONS.DELETE_CART_ITEMS,
        payload: { delete_cart_item: data.cart },
      });
    }
  } catch (e) {
    console.error(e);
  }
};

export const updateCartQtyHandler = async ({
  cartItems,
  token,
  actionType,
  cartDispatch,
  setShadowPageLoader,
}) => {
  setShadowPageLoader(true);
  try {
    const { status, data } = await axios({
      method: "POST",
      url: `/api/user/cart/${cartItems._id}`,
      headers: { authorization: token },
      data: {
        action: {
          type: actionType,
        },
      },
    });
    if (status === 200) {
      cartDispatch({
        type: CART_ACTIONS.UPDATE_CART_QTY,
        payload: { update_qty: data.cart },
      });
    }
  } catch (e) {
    console.error(e);
  } finally {
    setShadowPageLoader(false);
  }
};
