import React from "react";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div className="top-bar">
      <div className="container-fluid" style={{ background: "#133a75" }}>
        <div className=" container d-flex gap-4 text-end justify-content-end p-2 text-white pr-5">
          <div className="d-flex ">
            <span>
              <i class="fa fa-mobile ga-2"></i>
            </span>
            <span>+91999999999</span>
          </div>
          <div className="d-flex gap-2">
            <span>
              <i class="fa fa-envelope"></i>
            </span>
            <span>info@company.com</span>
          </div>
        </div>
      </div>

      <nav className=" container navbar pt-2 pb-2 ">
        <div className="container-fluid">
          <a className="navbar-brand">Logo</a>
          <form className="d-flex gap-5">
            <span className="fs-6">HOME</span>
            <span className="fs-6">ABOUT US</span>
            <span className="fs-6"> SERVICES</span>
            <span className="fs-6"> TESTIMONIALS</span>
            <span className="fs-6"> BLOGS</span>
            <span className="fs-6" style={{textDecoration:'underline'}}> CONTACT</span>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
