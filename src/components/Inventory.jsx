import React from "react";
import carGermany1 from "../img/car-german-1.jpeg";
import carGermany2 from "../img/car-german-2.jpeg";
import carGermany3 from "../img/car-german-3.jpeg";
import carAmerican1 from "../img/car-american-1.jpeg";
import carAmerican2 from "../img/car-american-2.jpeg";
import carAmerican3 from "../img/car-american-3.jpeg";
import "./Inventory.css";

const Inventory = () => {
  return (
    <section className="inventory py-5" id="inventory">
      <div className="container">
        <div className="row mb-5">
          <div className="col d-flex  flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1 ">our</h1>
            <h1 className="section-title-special mx-1">inventory</h1>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-10 d-flex justify-content-end">
            <button className="btn btn-outline-secondary text0uppercase mx-1">
              all
            </button>
            <button className="btn btn-outline-secondary text0uppercase mx-1">
              american
            </button>
            <button className="btn btn-outline-secondary text0uppercase mx-1">
              germany
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card ">
              <img className="card-img-top car-img" src={carGermany1} alt="" />
              <div className="card-body">
                <div className="car-info d-flex justify-content-between">
                  <div className="car-text text-uppercase">
                    <h6 className="card-title font-weight-bold">car maker</h6>
                    <h6 className="card-text">model</h6>
                  </div>
                  <h5 className="car-value align-self-center py-2 px-3">
                    <span className="car-price">$ 10,000</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between text-capitalize">
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    sedan
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-cogs" aria-hidden="true"></i>
                    </span>
                    automatic
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    50
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card ">
              <img className="card-img-top car-img" src={carGermany2} alt="" />
              <div className="card-body">
                <div className="car-info d-flex justify-content-between">
                  <div className="car-text text-uppercase">
                    <h6 className="card-title font-weight-bold">car maker</h6>
                    <h6 className="card-text">model</h6>
                  </div>
                  <h5 className="car-value align-self-center py-2 px-3">
                    <span className="car-price">$ 10,000</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between text-capitalize">
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    sedan
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-cogs" aria-hidden="true"></i>
                    </span>
                    automatic
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    50
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card ">
              <img className="card-img-top car-img" src={carGermany3} alt="" />
              <div className="card-body">
                <div className="car-info d-flex justify-content-between">
                  <div className="car-text text-uppercase">
                    <h6 className="card-title font-weight-bold">car maker</h6>
                    <h6 className="card-text">model</h6>
                  </div>
                  <h5 className="car-value align-self-center py-2 px-3">
                    <span className="car-price">$ 10,000</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between text-capitalize">
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    sedan
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-cogs" aria-hidden="true"></i>
                    </span>
                    automatic
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    50
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card ">
              <img className="card-img-top car-img" src={carAmerican1} alt="" />
              <div className="card-body">
                <div className="car-info d-flex justify-content-between">
                  <div className="car-text text-uppercase">
                    <h6 className="card-title font-weight-bold">car maker</h6>
                    <h6 className="card-text">model</h6>
                  </div>
                  <h5 className="car-value align-self-center py-2 px-3">
                    <span className="car-price">$ 10,000</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between text-capitalize">
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    sedan
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-cogs" aria-hidden="true"></i>
                    </span>
                    automatic
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    50
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card ">
              <img className="card-img-top car-img" src={carAmerican2} alt="" />
              <div className="card-body">
                <div className="car-info d-flex justify-content-between">
                  <div className="car-text text-uppercase">
                    <h6 className="card-title font-weight-bold">car maker</h6>
                    <h6 className="card-text">model</h6>
                  </div>
                  <h5 className="car-value align-self-center py-2 px-3">
                    <span className="car-price">$ 10,000</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between text-capitalize">
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    sedan
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-cogs" aria-hidden="true"></i>
                    </span>
                    automatic
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    50
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
            <div className="card ">
              <img className="card-img-top car-img" src={carAmerican3} alt="" />
              <div className="card-body">
                <div className="car-info d-flex justify-content-between">
                  <div className="car-text text-uppercase">
                    <h6 className="card-title font-weight-bold">car maker</h6>
                    <h6 className="card-text">model</h6>
                  </div>
                  <h5 className="car-value align-self-center py-2 px-3">
                    <span className="car-price">$ 10,000</span>
                  </h5>
                </div>
                <div className="card-footer d-flex justify-content-between text-capitalize">
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    sedan
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-cogs" aria-hidden="true"></i>
                    </span>
                    automatic
                  </p>
                  <p>
                    <span>
                      <i class="fa fa-car" aria-hidden="true"></i>
                    </span>
                    50
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
