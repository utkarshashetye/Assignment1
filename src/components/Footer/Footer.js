import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const containerStyle = {
    position: "relative",
    textAlign: "start",
    background: `url('img.png')`, // Set the image as the background
    backgroundSize: "cover", // Cover the entire container with the background image
    minHeight: "280px", // Set a minimum height for the container
    color: "#ffffff", // Set text color to white or any contrasting color
    padding: "20px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className="mt-5">
      <div style={containerStyle}></div>
      <div className="container-fluid " style={{ background: "#17478d" }}>
        <div className=" container row p-5">
          <div className="col text-white ">
            <h5>FOLLOW US</h5>
            <div className="d-flex gap-3 ">
              <span>
                <FaLinkedin />
              </span>
              <span>
                <FaTelegram />
              </span>
              <span>
                <FaTwitter />
              </span>
            </div>
            <div className="d-flex gap-2">
              <span>
                <FaFirefoxBrowser />
              </span>
              <span>https://company.com</span>
            </div>
          </div>
          <div
            className="col text-white"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h5>OUR SERVICES</h5>
            <span>>> Lorem ipsum dolor</span>
            <span>>> Lorem ipsum dolor</span>
            <span>>> Lorem ipsum dolor</span>
            <span>>> Lorem ipsum dolor</span>
          </div>
          <div
            className="col text-white pt-4"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span>>> Lorem ipsum dolor</span>
            <span>>> Lorem ipsum dolor</span>
            <span>>> Lorem ipsum dolor</span>
            <span>>> Lorem ipsum dolor</span>
          </div>
          <div className="col text-white">
            <h5>GET IN TOUCH</h5>
            <div className="d-flex gap-2">
              <span>
                <CiLocationOn />{" "}
              </span>
              <span>
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </span>
            </div>
            <hr />
            <div className="d-flex gap-1">
              <span>
                <CiMobile4 />
              </span>
              <span>Phone :</span>
              <span>+91 12345 67890</span>
            </div>
            <div className="d-flex gap-1">
              <span>
                <CiMail />
              </span>
              <span>Email :</span>
              <span>info@company.com</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" d-flex justify-content-between p-3 text-white"
        style={{ background: "#133a75" }}
      >
        <span>Copyright © 2023, iAssureIT All Rights Reserved</span>
        <span>
          Designed & Developed By{" "}
          <span style={{ fontWeight: "600" }}>
            {" "}
            iAssure International Technologies Pvt. Ltd.
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
