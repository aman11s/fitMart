import React from "react";

export const Sidebar = () => {
  return (
    <>
      <aside class="aside-container px-4 aside-height">
        <div class="filter-container">
          <i class="close-btn bx bx-x"></i>
          <div class="mt-5 space-between">
            <h5 class="h5">Filter</h5>
            <a href="#" class="underline-link">
              Clear
            </a>
          </div>

          <h5 class="h5 pt-5">Price</h5>
          <div class="pt-2 space-between">
            <span>100</span>
            <span>5000</span>
            <span>10000</span>
          </div>
          <input
            type="range"
            class="slider"
            min="100"
            max="10000"
            value="7000"
          />

          <div class="filter-section">
            <h5 class="h5 mb-2 pt-5">Category</h5>
            <label class="my-1" for="protein">
              <input type="checkbox" name="protein" id="protein" /> Proteins
            </label>
            <label class="my-1" for="gainer">
              <input type="checkbox" name="gainer" id="gainer" /> Gainers
            </label>
            <label class="my-1" for="pre-post-workout">
              <input
                type="checkbox"
                name="pre-post-workout"
                id="pre-post-workout"
              />{" "}
              Pre/ Post workout
            </label>
            <label class="my-1" for="multivitamins">
              <input type="checkbox" name="multivitamins" id="multivitamins" />{" "}
              Multivitamins
            </label>
          </div>

          <div class="filter-section">
            <h5 class="h5 mb-2 pt-5">Rating</h5>
            <label class="my-1" for="4-stars-&-above">
              <input type="radio" name="rating" id="4-stars-&-above" /> 4 stars
              & above
            </label>
            <label class="my-1" for="3-stars-&-above">
              <input type="radio" name="rating" id="3-stars-&-above" /> 3 stars
              & above
            </label>
            <label class="my-1" for="2-stars-&-above">
              <input type="radio" name="rating" id="2-stars-&-above" /> 2 stars
              & above
            </label>
            <label class="my-1" for="1-stars-&-above">
              <input type="radio" name="rating" id="1-stars-&-above" /> 1 stars
              & above
            </label>
          </div>

          <div class="filter-section">
            <h5 class="h5 mb-2 pt-5">Sort by</h5>
            <label class="my-1" for="price-low-to-high">
              <input type="radio" name="sort" id="price-low-to-high" /> Price -
              Low to High
            </label>
            <label class="my-1" for="price-high-to-low">
              <input type="radio" name="sort" id="price-high-to-low" /> Price -
              High to Low
            </label>
          </div>
        </div>
      </aside>
    </>
  );
};
