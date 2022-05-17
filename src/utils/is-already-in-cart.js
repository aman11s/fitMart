export const isAlreadyInCart = (cart, items) =>
  cart.some(({ _id }) => _id === items._id);
