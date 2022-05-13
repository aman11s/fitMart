import React from "react";
import { useAuth, useWishlist } from "../../context";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import { useEffect } from "react";
import axios from "axios";
import { WISHLIST_ACTIONS } from "../../utils/Actions";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";

export const Wishlist = () => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const {
    userData: { token },
  } = useAuth();

  useEffect(() => {
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
  }, [token, wishlistDispatch]);

  return (
    <>
      {wishlist.length ? (
        <>
          <main>
            <h4 className="h4 mt-5 text-center mx-3">
              My Wishlist ({wishlist.length})
            </h4>
            <div className="grid-minmax-card p-5">
              {wishlist.map((wishlistItems) => {
                return (
                  <WishlistCard
                    key={wishlistItems._id}
                    wishlistItems={wishlistItems}
                  />
                );
              })}
            </div>
          </main>
        </>
      ) : (
        <div className="empty-wishlist">
          <h4 className="h4 pb-3">Your wishlist is empty</h4>
          <Link to="/products">
            <button className="btn primary-solid-btn">Start Shopping</button>
          </Link>
        </div>
      )}
    </>
  );
};
