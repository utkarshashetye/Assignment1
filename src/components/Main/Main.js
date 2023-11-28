import React from "react";

const Main = () => {
  const containerStyle = {
    position: "relative",
    textAlign: "start",
    background: `url('Background.webp')`, 
    backgroundSize: "cover", 
    minHeight: "400px", 
    color: "#ffffff", 
    padding: "20px",
    display: "flex",
    alignItems: "center",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1, 
    width: "490px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet{" "}
        </p>
        <button style={{ border: "none", borderRadius: "4px", padding: "5px" }}>
          Home Contact Us
        </button>
      </div>
    </div>
  );
};

export default Main;
