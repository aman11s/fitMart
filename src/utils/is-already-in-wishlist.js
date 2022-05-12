export const isAlreadyInWishlist = (wishlist, item) =>
  wishlist.find(({ _id }) => _id === item._id);
