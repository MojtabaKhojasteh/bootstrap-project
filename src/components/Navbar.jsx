import React from "react";
import logo from "../img/gearLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md px-3 " id="navBar">
        {/* Logo */}
        <a className="navbar-brand" href="a.html">
          <img src={logo} alt="logo" />
        </a>

        {/* Toggle Bar */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
        >
          <span className="navbar-icon">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </span>
        </button>

        {/* Nav */}
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active">
              <a href="a.html" className="nav-link">
                خانه
              </a>
            </li>
            <li className="nav-item ">
              <a href="a.html" className="nav-link">
                مهارت ها
              </a>
            </li>
            <li className="nav-item ">
              <a href="a.html" className="nav-link">
                فهرست
              </a>
            </li>
            <li className="nav-item ">
              <a href="a.html" className="nav-link">
                ویژه
              </a>
            </li>
          </ul>

          {/* Social Medias */}
          <div className="nav-icons  d-none d-md-block  ">
            <a className="nav-icon px-2" href="a.html">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a className="nav-icon px-2" href="a.html">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a className="nav-icon px-2" href="a.html">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
