export const isAlreadyInCart = (cart, items) =>
  cart.find(({ _id }) => _id === items._id);
