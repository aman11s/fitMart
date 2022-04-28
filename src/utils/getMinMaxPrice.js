export const getMinMaxPrice = (product) => {
  const getNum = (price) => Number(price.split(",").join(""));
  const prices = product.map((item) => getNum(item.price));
  return { maxPrice: Math.max(...prices), minPrice: Math.min(...prices) };
};
