import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { wishlistReducer } from "../reducer";
import { WISHLIST_ACTIONS } from "../utils/Actions";
import { initialWishlistState } from "../utils/initialValues";
import { useAuth } from "./auth-context";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );

  const {
    userData: { token },
  } = useAuth();

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const { status, data } = await axios({
            method: "GET",
            url: "/api/user/wishlist",
            headers: { authorization: token },
          });
          if (status === 200) {
            wishlistDispatch({
              type: WISHLIST_ACTIONS.SHOW_WISHLIST,
              payload: { show_wishlist: data.wishlist },
            });
          }
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [token, wishlistDispatch]);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
