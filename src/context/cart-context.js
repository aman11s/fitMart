import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer";
import { CART_ACTIONS } from "../utils/Actions";
import { initialCartState } from "../utils/initialValues";
import { useAuth } from "./auth-context";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const {
    userData: { token },
  } = useAuth();

  useEffect(() => {
    if (token) {
      (async () => {
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
        }
      })();
    }
  }, [token, cartDispatch]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
