export const filterByRatings = (product, rating) => {
  switch (rating) {
    case "4-AND-ABOVE":
      return product.filter(({ ratings }) => Number(ratings) >= 4);
    case "3-AND-ABOVE":
      return product.filter(({ ratings }) => Number(ratings) >= 3);
    case "2-AND-ABOVE":
      return product.filter(({ ratings }) => Number(ratings) >= 2);
    case "1-AND-ABOVE":
      return product.filter(({ ratings }) => Number(ratings) >= 1);

    default:
      return product;
  }
};
