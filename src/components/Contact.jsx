import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto col-md-6">
            <form action="a.html">
              <div class="form-group">
                <label for=""></label>
                <input
                  type="email"
                  class="form-control p-3 contact-input"
                  name="contact-email"
                  id="contact-email"
                  placeholder="Enter Email"
                />
                <button
                  type="submit"
                  class="btn btn-outline-secondary btn-block contact-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
