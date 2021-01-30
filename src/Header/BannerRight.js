import React from "react";
import "./BannerRight.css";

const BannerRight = ({ check }) => {
  return (
    <div
      className={`BannerRight__Container_Night ${
        check && "BannerRight__Container_Sky"
      } `}
    ></div>
  );
};

export default BannerRight;
