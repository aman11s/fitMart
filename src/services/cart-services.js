import axios from "axios";
import { CART_ACTIONS } from "../utils/Actions";

export const addToCartHandler = async ({
  token,
  product,
  cartDispatch,
  navigate,
}) => {
  if (token) {
    try {
      const { status, data } = await axios({
        method: "POST",
        url: "/api/user/cart",
        headers: { authorization: token },
        data: { product },
      });
      if (status === 201) {
        cartDispatch({
          type: CART_ACTIONS.ADD_TO_CART,
          payload: { add_to_cart: data.cart },
        });
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    navigate("/login");
  }
};
