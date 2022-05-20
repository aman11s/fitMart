import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useWishlist } from "../../context";
import "./Wishlist.css";
import axios from "axios";
import { WISHLIST_ACTIONS } from "../../utils/Actions";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";
import { Loader } from "../../components";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Wishlist = () => {
  useDocumentTitle("Wishlist");
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const {
    userData: { token },
  } = useAuth();

  const [wishlistPageLoader, setWishlistPageLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setWishlistPageLoader(true);
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
      } finally {
        setWishlistPageLoader(false);
      }
    })();
  }, [token, wishlistDispatch]);

  return (
    <>
      {wishlist.length ? (
        <>
          {wishlistPageLoader ? (
            <main className="empty-wishlist">
              <Loader />
            </main>
          ) : (
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
          )}
        </>
      ) : (
        <main className="empty-wishlist">
          <h4 className="h4 pb-3">Your wishlist is empty</h4>
          <Link to="/products">
            <button className="btn primary-solid-btn">Start Shopping</button>
          </Link>
        </main>
      )}
    </>
  );
};
