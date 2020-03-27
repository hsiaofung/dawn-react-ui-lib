import React, { Component } from "react";
function SamplePrevArrow (props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i
          style={{ fontSize: "20px", color: "black" }}
          className={"fas fa-angle-left"}
        />
      </div>
    );
  };
  export default SamplePrevArrow
