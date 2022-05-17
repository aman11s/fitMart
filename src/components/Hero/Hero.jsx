import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="overlay">
          <h1>GET FIT</h1>
          <p>Your one stop fitness solution</p>
          <Link to="/products" className="pt-1">
            <button className="btn cta-btn primary-solid-btn">Shop now</button>
          </Link>
        </div>
        <img
          className="img-responsive"
          src="https://fitmart-screens.netlify.app/assets/hero-banners/dumbbells.jpeg"
          alt="hero-banner"
        />
      </div>
    </>
  );
};
