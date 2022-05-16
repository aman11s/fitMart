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
    setCartLoader(true);
    try {
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
      setCartLoader(false);
    }
  } else {
    navigate("/login");
  }
};

export const removeFromCartHandler = async ({
  cartItems,
  token,
  cartDispatch,
  flag,
}) => {
  try {
    const { status, data } = await axios({
      method: "DELETE",
      url: `/api/user/cart/${cartItems._id}`,
      headers: { authorization: token },
    });
    if (status === 200) {
      !flag && toast.error("Removed from Cart");
      cartDispatch({
        type: CART_ACTIONS.DELETE_CART_ITEMS,
        payload: { delete_cart_item: data.cart },
      });
    }
  } catch (e) {
    console.error(e);
  }
};
