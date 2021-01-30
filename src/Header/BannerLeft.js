import React from "react";
import "./BannerLeft.css";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";

const BannerLeft = () => {
  return (
    <div className="BannerLeft__Container">
      <div className="BannerLeft__Text">
        <h1>Petrik Nyilászárók Kft.</h1>
        <br />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className="BannerLeft__Button"
          startIcon={<InfoIcon />}
        >
          Rólunk
        </Button>
      </div>
    </div>
  );
};

export default BannerLeft;
