import React from "react";
import "./Gallery.css";
import carAmerican1 from "../img/car-american-1.jpeg";
import carAmerican2 from "../img/car-american-2.jpeg";
import carAmerican3 from "../img/car-american-3.jpeg";
import carAmerican4 from "../img/car-american-4.jpeg";
import carAmerican5 from "../img/car-american-5.jpeg";

const Gallery = () => {
  return (
    <div className="gallery py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-10 d-flex flex-wrap mx-auto text-uppercase justify-content-center">
            <h1 className="section-title-special mx-1">گالری</h1>
            <h1 className="font-weight-bold align-self-center mx-1">ما</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <div className="gallery-item">
              <img
                className="img-fluid gallery-img"
                src={carAmerican1}
                alt="car"
              />
            </div>
          </div>
          <div className="col-sm-6 d-flex flex-column justify-content-between">
            <div className="row">
              <div className="col-sm-6">
                <div className="gallery-item">
                  <img
                    className="img-fluid gallery-img"
                    src={carAmerican2}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="gallery-item">
                  <img
                    className="img-fluid gallery-img"
                    src={carAmerican3}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="gallery-item">
                  <img
                    className="img-fluid gallery-img"
                    src={carAmerican4}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="gallery-item">
                  <img
                    className="img-fluid gallery-img"
                    src={carAmerican5}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
