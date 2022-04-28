export const filterByPriceRange = (product, priceRange) => {
  const getNum = (num) => Number(num.split(",").join(""));
  return product.filter(({ price }) => getNum(price) <= priceRange);
};
