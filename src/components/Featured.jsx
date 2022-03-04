import React from "react";
import "../Featured.css";
import imgFeatured from "../img/featured.jpeg";

const Featured = () => {
  return (
    <section className="featured py-5" id="featured">
      <div className="container">
        <div className="row mb-5">
          <div className="col-10 d-flex flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1">
              Featured
            </h1>
            <h1 className="section-title-special mx-1">cars</h1>
          </div>
        </div>
      </div>

      <div className="row container mx-auto">
        <div className="col-10 mx-auto col-lg-6 featured-info my-3">
          <div className="d-flex flex-wrap featured-item my-3 p-2 text-capitalize align-items-baseline">
            <span className="featured-icon mr-2">
              <i class="fas fa-car fa-md fa-fw   "></i>
            </span>
            <h5 className="font-weight-bold mx-1">mercedes</h5>
            <h5 className="mx-1">new model</h5>
          </div>
          <div className="d-flex flex-wrap featured-item my-3 p-2 text-capitalize align-items-baseline">
            <span className="featured-icon mr-2">
              <i class="fas fa-car fa-md    "></i>
            </span>
            <h5 className="font-weight-bold mx-1">mercedes</h5>
            <h5 className="mx-1">new model</h5>
          </div>
          <div className="d-flex flex-wrap featured-item my-3 p-2 text-capitalize align-items-baseline">
            <span className="featured-icon mr-2">
              <i class="fas fa-car fa-md    "></i>
            </span>
            <h5 className="font-weight-bold mx-1">mercedes</h5>
            <h5 className="mx-1">new model</h5>
          </div>
          <div className="d-flex flex-wrap featured-item my-3 p-2 text-capitalize align-items-baseline">
            <span className="featured-icon mr-2">
              <i class="fas fa-car fa-md    "></i>
            </span>
            <h5 className="font-weight-bold mx-1">mercedes</h5>
            <h5 className="mx-1">new model</h5>
          </div>
          <div className="d-flex flex-wrap featured-item my-3 p-2 text-capitalize align-items-baseline">
            <span className="featured-icon mr-2">
              <i class="fas fa-car fa-md    "></i>
            </span>
            <h5 className="font-weight-bold mx-1">mercedes</h5>
            <h5 className="mx-1">new model</h5>
          </div>
        </div>

        <div className="featured-img col-10 mx-auto col-lg-6  my-3 align-self-center">
          <div className="img-container">
            <img
              className="img-fluid featured-photo"
              src={imgFeatured}
              alt="featured"
            />
            <a href="a.html" className="featured-link">
              <i class="fas fa-search fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
