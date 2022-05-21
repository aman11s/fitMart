import React from "react";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import "./NotFound.css";

export const NotFound = () => {
  useDocumentTitle("Page Not Found");
  const navigate = useNavigate();

  return (
    <main className="main-min-height">
      <img
        src="https://fitmart-screens.netlify.app/assets/404-Error.svg"
        alt="404-error"
        className="not-found img-responsive"
      />
      <button
        onClick={() => navigate("/")}
        className="center-btn mb-3 btn primary-solid-btn"
      >
        Back to Home
      </button>
    </main>
  );
};
