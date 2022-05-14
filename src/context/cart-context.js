import { createContext } from "react";
import { useContext, useReducer } from "react/cjs/react.production.min";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
