import React, { useEffect, useState } from "react";
import "./Navbar.css";
import InlineMenu from "./InlineMenu";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ check, handlecheck }) => {
  const [menu, setmenu] = useState(true);
  const [menuscroll, setmenuscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setmenu(true);
      } else {
        setmenu(false);
      }
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setmenuscroll(true);
      } else {
        setmenuscroll(false);
      }
    });
    return () => {
      window.removeEventListener("resize", null);
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`Navbar__Container ${menuscroll && "Navbar__Color"}`}>
      <div>
        <h1>Navbar</h1>
      </div>
      {menu ? (
        <InlineMenu
          check={check}
          handlecheck={handlecheck}
          menuscroll={menuscroll}
        />
      ) : (
        <HamburgerMenu
          check={check}
          handlecheck={handlecheck}
          menuscroll={menuscroll}
        />
      )}
    </div>
  );
};

export default Navbar;
