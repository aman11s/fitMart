import { CATEGORIES_ACTIONS } from "../utils/Actions";

export const categoryReducer = (state, { type, payload }) => {
  switch (type) {
    case CATEGORIES_ACTIONS.INITIALIZE_CATEGORIES:
      return { ...state, categories: payload.categories };

    case CATEGORIES_ACTIONS.SHOW_LOADER:
      return { ...state, categoryLoader: payload.categoryLoader };

    default:
      return state;
  }
};
