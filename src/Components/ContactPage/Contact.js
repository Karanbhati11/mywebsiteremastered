import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <React.Fragment>
      <div className="Contact" id="contact">
        <div className="contact_container">
          <div className="heading_contact">
            <h3 className="heading_con">Contact</h3>
          </div>
          <div>
            <div className="contact_form">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Email ID...."
                style={{ textAlign: "center", width: "70%" }}
              />
              <textarea
                placeholder="Enter text here"
                style={{ marginTop: "3px", textAlign: "center" }}
                rows="5"
                className="form-control"
              />
              <div
                style={{
                  margin: "5px",
                  padding: "2px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <button style={{ margin: "2px" }} className="btn btn-primary">
                  Submit
                </button>
                <button style={{ margin: "2px" }} className="btn btn-primary">
                  Clear
                </button>
              </div>
              <text style={{ color: "wheat" }}>Or</text>
              <h5 style={{ color: "white" }}>
                You can drop a mail at
                <em style={{ fontSize: "15px", color: "wheat" }}>
                  kboname1.1@gmail.com
                </em>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;
