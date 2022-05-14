import { CART_ACTIONS } from "../utils/Actions";

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART:
      return state;

    default:
      return state;
  }
};
