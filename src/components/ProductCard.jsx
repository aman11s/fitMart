import React from "react";

export const ProductCard = () => {
  return (
    <>
      <div class="vertical-card auto-width">
        <div class="card-header">
          <div class="card-img-container">
            <img
              class="card-img"
              src="/assets/products/whey-protein/ON-Whey-Protein-5-lb.webp"
              alt="ON-Whey-Protein-5-lb"
            />
            <i class="card-wishlist-icon product-wishlist-icon bx bx-heart"></i>
          </div>
        </div>
        <div class="card-body">
          <div class="item-price">Rs. 6,999</div>
          <div class="card-description">ON Whey Protein Powder</div>
        </div>
        <div class="card-footer">
          <button class="btn card-btn primary-outline-btn primary-btn-text-icon">
            <i class="btn-icon bx bxs-cart"></i>Add to cart
          </button>

          <button class="btn card-btn primary-solid-btn primary-btn-text-icon">
            <i class="btn-icon bx bxs-bolt"></i>Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
