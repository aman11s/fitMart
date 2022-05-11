import { WISHLIST_ACTIONS } from "../utils/Actions";

export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST:
      return { ...state, wishlist: payload.wishlist };
    default:
      return state;
  }
};
