import { FILTER_ACTIONS } from "../utils/Actions";
import { filterInitialValues } from "../utils/initialValues";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACTIONS.SORT_BY:
      return { ...state, sortBy: payload.sortBy };

    case FILTER_ACTIONS.RATINGS:
      return { ...state, ratings: payload.rating };

    case FILTER_ACTIONS.CATEGORY:
      return state.categories.includes(payload.category)
        ? {
            ...state,
            categories: state.categories.filter(
              (category) => category !== payload.category
            ),
          }
        : { ...state, categories: state.categories.concat(payload.category) };

    case FILTER_ACTIONS.PRICE_RANGE:
      return { ...state, priceRange: payload.priceRange };

    case FILTER_ACTIONS.CLEAR_FILTER:
      return { ...filterInitialValues, priceRange: payload.priceRange };

    default:
      return state;
  }
};
