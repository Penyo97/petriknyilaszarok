import React from "react";
import "./Footer.css";
import logo from "../icons/logo.svg";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Connect from "./Connect";

const Footer = () => {
  return (
    <div>
      <Connect />
      <div className="footer__Container">
        <div className="footer__copy">
          <img src={logo} alt="logo" className="footer__logo" />
          <br />
          <h3 className="footer__text">
            Copyright <CopyrightIcon className="footer__icon" /> 2021
          </h3>
        </div>
        <div className="footer__line">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Footer;
