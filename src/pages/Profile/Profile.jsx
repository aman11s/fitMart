import React from "react";
import { useAuth } from "../../context";
import "./Profile.css";

export const Profile = () => {
  const {
    userData: { user },
  } = useAuth();

  const { firstName, lastName, email } = user;

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
        <button className="btn primary-error-btn">Logout</button>
      </div>
    </div>
  );
};
