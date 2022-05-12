import { WISHLIST_ACTIONS } from "../utils/Actions";

export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST:
      return { ...state, wishlist: payload.add_wishlist };

    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: payload.remove_wishlist };

    default:
      return state;
  }
};
