import { FILTER_ACITONS } from "../utils/Actions/filter-actions";

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_ACITONS.SORT_BY:
      return { ...state, sortBy: payload.sortBy };

    default:
      return state;
  }
};
