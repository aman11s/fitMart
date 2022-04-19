import React from "react";
import "./Home.css";
import { Hero } from "../../components/Hero";
import { trumpCardObj } from "../../utils/trumpCardObj";

export const Home = () => {
  return (
    <>
      <Hero />
      <h2 className="h2 mt-5 text-center">Why Choose Us?</h2>
      <div className="m-4 mb-6 trump-cards container-flex-justify-center">
        {trumpCardObj.map((data) => {
          const { id, imgSrc, title, alt } = data;
          return (
            <div key={id} className="shadow trump-card p-2 radius-5">
              <img className="img-responsive" src={imgSrc} alt={alt} />
              <span className="text-center">{title}</span>
            </div>
          );
        })}
      </div>

      <h2 id="category" class="h2 mt-5 text-center">
        Featured Categories
      </h2>
      <div class="category m-4">
        <a
          href="/pages/category/protein.html"
          class="category-item radius-5 p-2"
        >
          <h2 class="h2 container-flex-center category-text">Whey Protein</h2>
          <img
            class="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/whey-protein/ON-Whey-Protein-5-lb.webp"
            alt="whey-protein"
          />
        </a>

        <a
          href="/pages/category/creatine.html"
          class="category-item radius-5 p-2"
        >
          <h2 class="h2 container-flex-center category-text">Creatine</h2>
          <img
            class="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/creatine/dymatize-creatine.webp"
            alt="creatine"
          />
        </a>

        <a
          href="/pages/category/gainer.html"
          class="category-item radius-5 p-2"
        >
          <h2 class="h2 container-flex-center category-text">Gainer</h2>
          <img
            class="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/gainer/mb-gainer.webp"
            alt="gainer"
          />
        </a>

        <a
          href="/pages/category/multi-vit.html"
          class="category-item radius-5 p-2"
        >
          <h2 class="h2 container-flex-center category-text">Multivitamins</h2>
          <img
            class="img-responsive"
            src="https://fitmart-screens.netlify.app/assets/products/multi-vitamins/mb-multi-vit.webp"
            alt="multivitamins"
          />
        </a>
      </div>
    </>
  );
};
