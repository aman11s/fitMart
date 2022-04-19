import React from "react";
import "./Home.css";
import { Hero, TrumpCard } from "../../components";
import { trumpCardObj } from "../../utils";

export const Home = () => {
  return (
    <>
      <Hero />
      <h2 className="h2 mt-5 text-center">Why Choose Us?</h2>
      <div className="m-4 mb-6 trump-cards container-flex-justify-center">
        {trumpCardObj.map((data) => {
          return <TrumpCard key={data.id} data={data} />;
        })}
      </div>

      <h2 id="category" className="h2 mt-5 text-center">
        Featured Categories
      </h2>
      <div className="category m-4">
        <a
          href="/pages/category/protein.html"
          className="category-item radius-5 p-2"
        >
          <h2 className="h2 container-flex-center category-text">
            Whey Protein
          </h2>
          <img
            className="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/whey-protein/ON-Whey-Protein-5-lb.webp"
            alt="whey-protein"
          />
        </a>

        <a
          href="/pages/category/creatine.html"
          className="category-item radius-5 p-2"
        >
          <h2 className="h2 container-flex-center category-text">Creatine</h2>
          <img
            className="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/creatine/dymatize-creatine.webp"
            alt="creatine"
          />
        </a>

        <a
          href="/pages/category/gainer.html"
          className="category-item radius-5 p-2"
        >
          <h2 className="h2 container-flex-center category-text">Gainer</h2>
          <img
            className="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/gainer/mb-gainer.webp"
            alt="gainer"
          />
        </a>

        <a
          href="/pages/category/multi-vit.html"
          className="category-item radius-5 p-2"
        >
          <h2 className="h2 container-flex-center category-text">
            Multivitamins
          </h2>
          <img
            className="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/multi-vitamins/mb-multi-vit.webp"
            alt="multivitamins"
          />
        </a>
      </div>
    </>
  );
};
