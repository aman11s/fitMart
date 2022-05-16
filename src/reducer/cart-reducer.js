import { CART_ACTIONS } from "../utils/Actions";

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART:
      return { ...state, cart: payload.add_to_cart };

    case CART_ACTIONS.SHOW_CART_ITEMS:
      return { ...state, cart: payload.show_cart_items };

    case CART_ACTIONS.DELETE_CART_ITEMS:
      return { ...state, cart: payload.delete_cart_item };

    case CART_ACTIONS.UPDATE_CART_QTY:
      return { ...state, cart: payload.update_qty };

    default:
      return state;
  }
};
