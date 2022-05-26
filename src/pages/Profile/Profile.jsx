import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import toast from "react-hot-toast";
import "./Profile.css";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { CART_ACTIONS, WISHLIST_ACTIONS } from "../../utils/Actions";

export const Profile = () => {
  useDocumentTitle("Profile");
  const {
    userData: { user },
    setUserData,
  } = useAuth();

  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  const { firstName, lastName, email } = user;
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    setUserData({});
    wishlistDispatch({ type: WISHLIST_ACTIONS.CLEAR_WISHLIST });
    cartDispatch({ type: CART_ACTIONS.CLEAR_CART });
    localStorage.removeItem("userData");
    toast.success("Successfully logged out!");
  };

  return (
    <div className="profile">
      <h2 className="h2 mt-3">My profile</h2>

      <div className="user-profile-card container-flex-y-center m-2 radius-5 p-3">
        <img
          src="https://colorant-ui.netlify.app/components/Images/avatar.png"
          alt="avatar"
          className="avatar avatar-md-size"
        />
        <h5 className="h5">
          {" "}
          <span>{firstName}</span> <span>{lastName}</span>{" "}
        </h5>
        <div className="p-2">{email}</div>
        <button onClick={logoutHandler} className="btn primary-error-btn">
          Logout
        </button>
      </div>
    </div>
  );
};
