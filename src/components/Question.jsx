import React from "react";
import "../Question.css";

const Question = () => {
  return (
    <div className="question py-5" id="question">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-2 col-md-6 d-flex justify-content-center question-gray p-4">
            <a href="a.html" className="question-icon mr-3">
              <i class="fas fa-search    "></i>{" "}
            </a>
            <div className="question-text w-75">
              <h4 className="question-title font-weight-bold">
                Are You Looking For A Car?
              </h4>
              <p className="question-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, impedit.
              </p>
            </div>
          </div>

          <div className="col-10 mx-auto my-2 col-md-6 d-flex justify-content-center question-yellow p-4">
            <a href="a.html" className="question-icon mr-3">
              <i class="fas fa-dollar-sign    "></i>{" "}
            </a>
            <div className="question-text w-75">
              <h4 className="question-title font-weight-bold">
                Do You Want To Sell A Car{" "}
              </h4>
              <p className="question-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
