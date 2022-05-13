import { PRODUCTS_ACTIONS } from "../utils/Actions";

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case PRODUCTS_ACTIONS.INITIALIZE_PRODUCTS:
      return {
        ...state,
        products: payload.products,
        productMinPrice: payload.minPrice,
        productMaxPrice: payload.maxPrice,
      };

    case PRODUCTS_ACTIONS.SHOW_LOADER:
      return { ...state, productLoader: payload.productLoader };
    default:
      return state;
  }
};
