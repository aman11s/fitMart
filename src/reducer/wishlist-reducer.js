import { WISHLIST_ACTIONS } from "../utils/Actions";
import { initialWishlistState } from "../utils/initialValues";

export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST:
      return { ...state, wishlist: payload.add_wishlist };

    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: payload.remove_wishlist };

    case WISHLIST_ACTIONS.SHOW_WISHLIST:
      return { ...state, wishlist: payload.show_wishlist };

    case WISHLIST_ACTIONS.CLEAR_WISHLIST:
      return { ...initialWishlistState };

    default:
      return state;
  }
};
