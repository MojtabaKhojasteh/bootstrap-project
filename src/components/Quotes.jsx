import React from "react";
import "./Quotes.css";
import carAmerican1 from "../img/car-american-1.jpeg";
import carAmerican2 from "../img/car-american-2.jpeg";
import carAmerican3 from "../img/car-american-3.jpeg";
import customer1 from "../img/customer-1.jpg";
import customer2 from "../img/customer-2.jpg";
import customer3 from "../img/customer-3.jpg";

const Quotes = () => {
  return (
    <div className="quotes py-5 my-5">
      <div className="container">
        {/* Title */}
        <div className="row my-5">
          <div className="col-10 d-flex flex-wrap mx-auto text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1">
              what they
            </h1>
            <h1 className="section-title-special mx-1">say</h1>
          </div>
        </div>
        {/* /Title */}
        <div className="row">
          {/* Single Card */}
          <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
            <div class="card">
              <img class="card-img-top" src={carAmerican1} alt="American Car" />
              <div class="card-body text-center customer-body">
                <img
                  src={customer1}
                  alt="Customer"
                  className="rounded-circle customer-img"
                />
                <h4 class="card-title text-capitalize customer-name">
                  customer name
                </h4>
                <p class="card-text text-capitalize customer-job">
                  customer job
                </p>
                <p className="customer-quote">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sint, tempore?
                </p>
                <span className="customer-icon">
                  <i class="fas fa-quote-left"></i>
                </span>
              </div>
            </div>
          </div>
          {/* /Single Card */}
          <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
            <div class="card">
              <img class="card-img-top" src={carAmerican2} alt="American Car" />
              <div class="card-body text-center customer-body">
                <img
                  src={customer2}
                  alt="Customer"
                  className="rounded-circle customer-img"
                />
                <h4 class="card-title text-capitalize customer-name">
                  customer name
                </h4>
                <p class="card-text text-capitalize customer-job">
                  customer job
                </p>
                <p className="customer-quote">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sint, tempore?
                </p>
                <span className="customer-icon">
                  <i class="fas fa-quote-left"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
            <div class="card">
              <img class="card-img-top" src={carAmerican3} alt="American Car" />
              <div class="card-body text-center customer-body">
                <img
                  src={customer3}
                  alt="Customer"
                  className="rounded-circle customer-img"
                />
                <h4 class="card-title text-capitalize customer-name">
                  customer name
                </h4>
                <p class="card-text text-capitalize customer-job">
                  customer job
                </p>
                <p className="customer-quote">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sint, tempore?
                </p>
                <span className="customer-icon">
                  <i class="fas fa-quote-left"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
