import React from "react";
import "../Skills.css";

const Skills = () => {
  return (
    <section className="skills py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col d-flex  flex-wrap text-uppercase justify-content-center">
            <h1 className="font-weight-bold align-self-center mx-1 ">
              why choose
            </h1>
            <h1 className="section-title-special mx-1">car dealer</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-3 text-center my-3">
            <a className="skills-icon p-2 rounded-circle" href="a.html">
              <i class="fa fa-car" aria-hidden="true"></i>
            </a>
            <h6 className="text-uppercase font-weight-bold my-3">all brands</h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, id.
            </p>
          </div>

          <div className="col-sm-6 col-lg-3 text-center my-3">
            <a className="skills-icon p-2 rounded-circle" href="a.html">
              <i class="fa fa-comment" aria-hidden="true"></i>
            </a>
            <h6 className="text-uppercase font-weight-bold my-3">
              free support
            </h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, id.
            </p>
          </div>

          <div className="col-sm-6 col-lg-3 text-center my-3">
            <a className="skills-icon p-2 rounded-circle" href="a.html">
              <i class="fa fa-truck" aria-hidden="true"></i>
            </a>
            <h6 className="text-uppercase font-weight-bold my-3">caring</h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, id.
            </p>
          </div>

          <div className="col-sm-6 col-lg-3 text-center my-3">
            <a className="skills-icon p-2 rounded-circle" href="a.html">
              <i class="fa fa-google-wallet" aria-hidden="true"></i>
            </a>
            <h6 className="text-uppercase font-weight-bold my-3">affordable</h6>
            <div className="skills-underline"></div>
            <p className="w-75 mx-auto text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
