import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import "./Form.css";
const Form = () => {
  return (
    <div className="container-fluid bg-white mt-5">
      <div className="row">
        <div className="heading col-6">
          <div className="text-content">
            <h1>Lets start something Great</h1>
            <p>
              {" "}
              Loram leads the digital transformation of track maintenance and
              infrastructure management, coalescing data that unlocks
            </p>
            <div className="cont">
              <span className="icon">
                <FaLocationDot style={{ fill: "white" }} />
              </span>
              <span>
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </span>
            </div>
            <div className="cont">
              <span className="icon">
                <CiMobile4 style={{ fill: "white" }} />
              </span>
              <span>+91 12345 67890</span>
            </div>
            <div className="cont">
              <span className="icon">
                <IoIosMail style={{ fill: "white" }} />
              </span>
              <span>info@company.com</span>
            </div>
          </div>
        </div>
        <div className="col-6 form-content">
          <form className="form">
            <h1 style={{ color: "white" }}>Need Help ?</h1>
            <p style={{ color: "white" }}>
              Loram leads the digital transformation of track maintenance and
              infrastructure.
            </p>
            <div className="form-group">
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="Subject"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="your message"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                background: "white",
                color: "#133a75",
                fontWeight: "600",
              }}
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
