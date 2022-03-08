import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-5">
        <div className="footer-icons d-flex justify-content-around">
          <a href="a.html" className="footer-icon">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="a.html" className="footer-icon">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="a.html" className="footer-icon">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="a.html" className="footer-icon">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="a.html" className="footer-icon">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
