export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORIES":
      return { ...state, categories: action.payload };

    case "LOADER":
      return { ...state, loader: action.payload };

    default:
      return state;
  }
};
