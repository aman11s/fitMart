import React from "react";
import { trumpCardObj } from "../../utils";
import "./SingleProductCard.css";

export const SingleProductCard = ({ singleProduct }) => {
  const { imgSrc, imgAlt, price, ratings, title } = singleProduct;
  return (
    <>
      <div className="single-product-card">
        <div className="product-card-img">
          <img className="img-responsive" src={imgSrc} alt={imgAlt} />
        </div>
        <div className="product-card-details">
          <div className="product-title fw-800">{title}</div>
          <div className="container-flex-align-center fw-600 pt-1">
            <i className="bx bxs-star"></i>
            {ratings} / 5
          </div>
          <div className="pt-1 product-price fw-700">Rs. {price}</div>
          <div className="des fw-700">Inclusive of all taxes</div>

          <hr />

          {trumpCardObj.map((card) => {
            const { imgSrc, alt, title, id } = card;
            return (
              <div key={id} className="container-flex-align-center py-1">
                <img className="product-trump-img " src={imgSrc} alt={alt} />
                <span className="pl-1">{title}</span>
              </div>
            );
          })}

          <div className="product-card-btn my-2">
            <button class="btn primary-solid-btn mr-1">Add to Cart</button>
            <button class="btn primary-outline-btn">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};
