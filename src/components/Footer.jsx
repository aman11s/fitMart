import React from "react";

export const Footer = () => {
  return (
    <>
      <footer class="footer-container p-2">
        <p class="pt-1 pb-2 small-text">
          Made with <span class="code-symbol">&lt;/&gt;</span> by Aman Singh
        </p>
        <ul>
          <li class="footer-link">
            <a
              href="https://github.com/aman11s"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="bx bxl-github"></i>
            </a>
          </li>
          <li class="footer-link">
            <a
              href="https://twitter.com/aman11s"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="bx bxl-twitter"></i>
            </a>
          </li>
          <li class="footer-link">
            <a
              href="https://www.linkedin.com/in/aman11s/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="bx bxl-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <div>&copy 2022 | fitMart | All Rights Reserved</div>
      </footer>
    </>
  );
};
