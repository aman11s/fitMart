import React from "react";
import "./Sidebar.css";
import { SortFilter } from "../SortFilter/SortFilter";
import { RatingsFilter } from "../RatingsFilter/RatingsFilter";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      <aside className="aside-container px-4 aside-height">
        <div className={`filter-container ${showSidebar && "open-transition"}`}>
          <button
            className="close-btn bx bx-x"
            onClick={() => setShowSidebar(false)}
          ></button>
          <div className="mt-5 space-between">
            <h5 className="h5">Filter</h5>
            <button className="btn secondary-solid-btn">Clear</button>
          </div>

          <h5 className="h5 pt-5">Price</h5>
          <div className="pt-2 space-between">
            <span>100</span>
            <span>5000</span>
            <span>10000</span>
          </div>
          <input
            type="range"
            className="slider"
            min="100"
            max="10000"
            // value="7000"
          />

          <CategoryFilter />

          <RatingsFilter />

          <SortFilter />
        </div>
      </aside>
    </>
  );
};
