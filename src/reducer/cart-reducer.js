import { CART_ACTIONS } from "../utils/Actions";

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART:
      return { ...state, cart: payload.add_to_cart };

    default:
      return state;
  }
};
