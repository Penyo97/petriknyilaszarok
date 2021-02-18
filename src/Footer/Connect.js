import React from "react";
import "./Connect.css";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import HomeIcon from "@material-ui/icons/Home";
import connect from "../icons/hyperlink.svg";

const Connect = () => {
  const style = {
    paddingRight: "5px",
    fontSize: "24pt",
  };

  return (
    <div className="Connect__Container">
      <div className="Connect__Text">
        <h1>Kapcsolat</h1>
        <br />
        <h3 className="Connect__Texts">
          <HomeIcon style={style} /> Székhely: 2045 Törökbálint Patak u. 1
        </h3>
        <h3 className="Connect__Texts">
          <MailIcon style={style} /> Email: petriknyilaszarok@gmail.com
        </h3>
        <h3 className="Connect__Texts">
          <PhoneIphoneIcon style={style} /> Mobil: 06204059400
        </h3>
      </div>
      <div>
        <img src={connect} alt="connect" className="Connect__Img" />
      </div>
    </div>
  );
};

export default Connect;
