import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import MenuIcon from "@material-ui/icons/Menu";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ check, handlecheck, menuscroll }) => {
  const [open, setopen] = useState(false);
  const click = () => {
    setopen(true);
  };
  const close = (e) => {
    if (e.type === "click") {
      setopen(false);
    }
  };
  const style = {
    color: menuscroll ? "#9cb380" : check ? "#006283" : "#cae9ff",
  };
  return (
    <div>
      <div className="Ham__menubox">
        {!menuscroll && (
          <Switch
            checked={check}
            onChange={handlecheck}
            size="medium"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checkedIcon={<Brightness5Icon />}
            icon={<Brightness2Icon />}
            className="switch"
          />
        )}
        <MenuIcon style={style} onClick={click} className="Ham__Icon" />
      </div>
      <Drawer
        open={open}
        anchor="right"
        onClose={close}
        className="Navbar__drawer"
      >
        <List>
          <ListItem button></ListItem>
          <ListItem button>
            <ListItemText>
              <h3>Rólunk</h3>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <h3>Szolgáltatások</h3>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>
              <h3>Referenciák</h3>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemText>
              <h3>Kapcsolat</h3>
            </ListItemText>
          </ListItem>

          <ListItem button onClick={() => setopen(false)}>
            <ListItemText>
              <h3>Kilépés</h3>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
