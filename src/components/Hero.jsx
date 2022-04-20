import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="overlay">
          <h1>GET FIT</h1>
          <p>Your one stop fitness solution</p>
          <a href="#category" className="pt-1">
            <button className="btn primary-solid-btn">Shop now</button>
          </a>
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
