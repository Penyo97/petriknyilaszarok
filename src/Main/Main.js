import React, { useState, useEffect } from "react";
import About from "./About";
import "./Main.css";
import Reference from "./Reference";
import Button from "@material-ui/core/Button";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Main = () => {
  const [visible, setvisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setvisible(true);
      } else {
        setvisible(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div>
      {visible && (
        <Button
          variant="outlined"
          color="primary"
          className="Main__button"
          onClick={() => {
            document
              .getElementById("header")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
      <About />
      <Reference />
    </div>
  );
};

export default Main;
