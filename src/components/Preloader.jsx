import React from "react";
import preloaderImage from "../img/preloader.gif";
import "../Preloader.css";

const Preloader = () => {
  window.addEventListener("load", () =>
    document.querySelector(".preloader").classList.add(".hidePreloader")
  );
  return (
    <div className="preloader d-flex justify-content-center align-items-center">
      <img src={preloaderImage} alt="preloader" />
    </div>
  );
};

export default Preloader;
