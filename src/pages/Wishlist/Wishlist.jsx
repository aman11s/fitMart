import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context";
import "./Wishlist.css";
import { WishlistCard } from "../../components/WishlistCard/WishlistCard";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export const Wishlist = () => {
  useDocumentTitle("Wishlist");
  const {
    wishlistState: { wishlist },
  } = useWishlist();

  return (
    <>
      {wishlist.length ? (
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
