import axios from "axios";
import { WISHLIST_ACTIONS } from "../utils/Actions";

export const addWishlistHandler = async ({
  token,
  product,
  wishlistDispatch,
}) => {
  try {
    const { status, data } = await axios({
      method: "POST",
      url: "/api/user/wishlist",
      headers: { authorization: token },
      data: { product },
    });
    if (status === 201) {
      wishlistDispatch({
        type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
        payload: { wishlist: data.wishlist },
      });
    }
  } catch (e) {
    console.error(e);
  }
};
