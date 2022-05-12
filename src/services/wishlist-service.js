import axios from "axios";
import { WISHLIST_ACTIONS } from "../utils/Actions";
import toast from "react-hot-toast";

export const addWishlistHandler = async ({
  token,
  product,
  wishlistDispatch,
  navigate,
}) => {
  if (token) {
    try {
      const { status, data } = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        headers: { authorization: token },
        data: { product },
      });
      if (status === 201) {
        toast.success("Added to wishlist");
        wishlistDispatch({
          type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
          payload: { wishlist: data.wishlist },
        });
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    navigate("/login");
  }
};
