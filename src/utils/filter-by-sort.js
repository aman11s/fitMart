export const filterBySort = (product, sortTo) => {
  const getNum = (num) => {
    return Number(num.split(",").join(""));
  };

  switch (sortTo) {
    case "HIGH-TO-LOW":
      return [...product].sort((a, b) => getNum(b.price) - getNum(a.price));

    case "LOW-TO-HIGH":
      return [...product].sort((a, b) => getNum(a.price) - getNum(b.price));

    default:
      return product;
  }
};
