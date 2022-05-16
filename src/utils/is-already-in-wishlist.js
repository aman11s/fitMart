export const isAlreadyInWishlist = (wishlist, item) =>
  wishlist.some(({ _id }) => _id === item._id);
