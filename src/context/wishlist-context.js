import { createContext, useReducer, useContext } from "react";
import { wishlistReducer } from "../reducer";
import { initialWishlistState } from "../utils/initialValues";

const WishlistContext = createContext({ wishlist: [] });

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    initialWishlistState,
    wishlistReducer
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
