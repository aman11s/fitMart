import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="nav-bar shadow">
        <div className="container-flex-align-center short-width">
          <div className="left-nav">
            <a className="h2" href="#">
              <span className="primary-text-color">fit</span>Mart
            </a>
          </div>

          {/* search input */}
          <input
            type="text"
            className="input-box search-input input-default"
            placeholder="search"
          />

          <ul className="right-nav">
            <li>
              <a href="/pages/login.html" className="nav-pills">
                <button className="btn primary-solid-btn">Login</button>
              </a>
            </li>

            <li>
              <a
                href="/pages/wishlist.html"
                className="nav-pills badge-container inline-block"
              >
                <i className="badge-container-icon bx bx-heart"></i>
                <span className="icon-badge-number dnd">5</span>
              </a>
            </li>

            <li>
              <a
                href="/pages/cart.html"
                className="nav-pills badge-container inline-block"
              >
                <i className="badge-container-icon bx bx-cart"></i>
                <div className="icon-badge-number dnd">3</div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
