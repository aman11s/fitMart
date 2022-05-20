import axios from "axios";
import { WISHLIST_ACTIONS } from "../utils/Actions";
import toast from "react-hot-toast";

export const addWishlistHandler = async ({
  token,
  product,
  wishlistDispatch,
  navigate,
  setWishlistDisable,
}) => {
  if (token) {
    try {
      setWishlistDisable(true);
      const { status, data } = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        headers: { authorization: token },
        data: { product },
      });
      if (status === 201) {
        toast.success("Added to Wishlist");
        wishlistDispatch({
          type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
          payload: { add_wishlist: data.wishlist },
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setWishlistDisable(false);
    }
  } else {
    navigate("/login");
  }
};

export const removerWishlistHandler = async ({
  token,
  product,
  wishlist,
  wishlistDispatch,
  navigate,
  removeWishlistFlag,
  setWishlistDisable,
}) => {
  if (token) {
    try {
      setWishlistDisable(true);
      const { status, data } = await axios({
        method: "DELETE",
        url: `/api/user/wishlist/${product._id}`,
        headers: { authorization: token },
        data: { wishlist: wishlist },
      });
      if (status === 200) {
        setWishlistDisable(false);
        removeWishlistFlag && toast.error("Removed from Wishlist");
        wishlistDispatch({
          type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST,
          payload: { remove_wishlist: data.wishlist },
        });
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    navigate("/login");
  }
};
