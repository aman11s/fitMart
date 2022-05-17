export const getCartDetails = (cartItems) => {
  const getNum = (price) => Number(price.split(",").join(""));
  return cartItems.reduce(
    (cartDetailsObj, currObj) => {
      return {
        ...cartDetailsObj,
        totalItems: (cartDetailsObj.totalItems += currObj.qty),
        totalPrice: (cartDetailsObj.totalPrice +=
          getNum(currObj.price) * currObj.qty),
      };
    },
    {
      totalPrice: 0,
      totalItems: 0,
      discount: 300,
      delivery: 150,
    }
  );
};
