import React from "react";
import Switch from "@material-ui/core/Switch";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const InlineMenu = ({ check, handlecheck, menuscroll }) => {
  const style = {
    color: menuscroll ? "#9cb380" : check ? "#006283" : "#cae9ff",
  };
  return (
    <div className="Nav_Menus" style={style}>
      <h3>Rólunk</h3>
      <h3>Szolgáltatások</h3>
      <h3>Referencia</h3>
      <h3>Kapcsolat</h3>
      <Switch
        checked={check}
        onChange={handlecheck}
        size="medium"
        inputProps={{ "aria-label": "secondary checkbox" }}
        checkedIcon={<Brightness5Icon />}
        icon={<Brightness2Icon />}
        className="switch"
      />
    </div>
  );
};

export default InlineMenu;
