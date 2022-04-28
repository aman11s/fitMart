import { FILTER_ACITONS } from "../utils/Actions/filter-actions";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACITONS.SORT_BY:
      return { ...state, sortBy: payload.sortBy };

    case FILTER_ACITONS.RATINGS:
      return { ...state, ratings: payload.rating };

    case FILTER_ACITONS.CATEGORY:
      return state.categories.includes(payload.category)
        ? {
            ...state,
            categories: state.categories.filter(
              (category) => category !== payload.category
            ),
          }
        : { ...state, categories: state.categories.concat(payload.category) };

    default:
      return state;
  }
};
