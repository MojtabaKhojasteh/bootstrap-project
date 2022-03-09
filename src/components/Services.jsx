import React from "react";
import "./Services.css";
import carVideo from "../video/videoBcg.mp4";
const Services = () => {
  return (
    <div className="px-3 rtl">
      <div className="row my-5">
        <div className="col-10 d-flex flex-wrap mx-auto text-uppercase justify-content-center">
          <h1 className="section-title-special mx-1">خدمات</h1>
          <h1 className="font-weight-bold align-self-center mx-1">ما</h1>
        </div>
      </div>
      <div className="services py-5">
        <div className="video-container">
          <video
            src={carVideo}
            className="video-item"
            autoPlay
            loop
            muted
            type="video/mp4"
          ></video>
        </div>
        <div className="video-overlay"></div>
        <div className="container py-5">
          <div className="row my-3 ">
            <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
              <div className="service py-4 pl-4">
                <span className="service-icon">
                  <i class="fas fa-cogs"></i>
                </span>
                <h5 className="text-uppercase font-weight-bold">تعمیر</h5>
                <h6 className="text-capitalize service-title">خودرو</h6>
              </div>
            </div>
            <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
              <div className="service py-4 pl-4">
                <span className="service-icon">
                  <i class="fas fa-car-battery"></i>
                </span>
                <h5 className="text-uppercase font-weight-bold">تعویض</h5>

                <h6 className="text-capitalize service-title">باتری</h6>
              </div>
            </div>
            <div className="col-8 mx-auto col-md-6 col-lg-4 my-3">
              <div className="service py-4 pl-4">
                <span className="service-icon">
                  <i class="fas fa-car-crash"></i>
                </span>
                <h5 className="text-uppercase font-weight-bold">امداد</h5>
                <h6 className="text-capitalize service-title">جاده ای</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
