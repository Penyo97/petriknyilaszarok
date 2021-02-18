import React from "react";
import "./ImageBox.css";
import Tilt from "react-tilt";

const ImageBox = ({ index, value, images }) => {
  return (
    <div className="Imagebox__Container">
      {value === index &&
        images.map((item) => {
          return (
            <Tilt
              key={item}
              options={{ max: 15, scale: 1 }}
              className="Imagebox__ImgCont"
            >
              <img src={item} alt="item" className="Imagebox__Img" />
            </Tilt>
          );
        })}
    </div>
  );
};

export default ImageBox;
