export const filterByCategories = (product, category) =>
  category.length
    ? product.filter(({ categoryName }) => category.includes(categoryName))
    : product;
