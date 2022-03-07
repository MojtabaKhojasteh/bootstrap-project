import React, { Fragment } from "react";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container-fluid">
          <div className="row height-max align-items-center">
            <div className="text-right pr-5 ml-auto col-md-9">
              <h5 className="title-heading d-inline-block p-2 text-uppercase">
                the all new
              </h5>
              <h2 className="text-uppercase my-2 title">2022 mercedes-benz</h2>
              <h3 className="text-uppercase">model name</h3>
              <h6 className="text-capitalize">starts from</h6>
              <h2>
                $60.000
                <a href="a.html" className="title-icon d-inline-block">
                  <i class="fa fa-play" aria-hidden="true"></i>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
