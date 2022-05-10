import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export const RequiresAuth = ({ children }) => {
  const {
    userData: { token: isLoggedin },
  } = useAuth();

  const location = useLocation();

  return (
    <>
      {isLoggedin ? (
        children
      ) : (
        <Navigate to={"/login"} state={{ from: location }} replace />
      )}
    </>
  );
};
