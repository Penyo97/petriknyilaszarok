import React, { useState } from "react";
import "./Banner.css";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import Navbar from "./Navbar";

const Banner = () => {
  const [check, setcheck] = useState(false);

  const handlecheck = () => {
    setcheck(!check);
  };
  return (
    <div>
      <Navbar check={check} handlecheck={handlecheck} />
      <div className="Banner__Container">
        <BannerLeft />
        <BannerRight check={check} />
      </div>
    </div>
  );
};

export default Banner;
