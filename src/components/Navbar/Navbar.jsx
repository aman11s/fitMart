import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./Navbar.css";

export const Navbar = () => {
  const {
    userData: { token: isLoggedin },
  } = useAuth();

  return (
    <>
      <nav className="nav-bar shadow">
        <div className="container-flex-align-center short-width">
          <div className="left-nav">
            <Link className="h2" to="/">
              <span className="primary-text-color">fit</span>Mart
            </Link>
          </div>

          {/* search input */}
          <input
            type="text"
            className="input-box search-input input-default"
            placeholder="search"
          />

          <ul className="right-nav">
            <li>
              {isLoggedin ? (
                <Link to="/profile" className="nav-pills">
                  <i className="badge-container-icon bx bx-user"></i>
                </Link>
              ) : (
                <Link to="/login" className="btn primary-solid-btn">
                  Login
                </Link>
              )}
            </li>

            <li>
              <Link
                to="/wishlist"
                className="nav-pills badge-container inline-block"
              >
                <i className="badge-container-icon bx bx-heart"></i>
                <span className="icon-badge-number dnd">5</span>
              </Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="nav-pills badge-container inline-block"
              >
                <i className="badge-container-icon bx bx-cart"></i>
                <div className="icon-badge-number dnd">3</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
