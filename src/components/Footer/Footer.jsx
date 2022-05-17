import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container p-2">
        <p className="pt-1 pb-2 small-text">
          Made with <span className="code-symbol">&lt;/&gt;</span> by Aman Singh
        </p>
        <ul>
          <li className="footer-link">
            <a
              href="https://github.com/aman11s"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="footer-link">
            <a
              href="https://twitter.com/aman11s"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </li>
          <li className="footer-link">
            <a
              href="https://www.linkedin.com/in/aman11s/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <div>&copy; 2022 | fitMart | All Rights Reserved</div>
      </footer>
    </>
  );
};
