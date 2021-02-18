import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ImageBox from "./ImageBox";
import "./Reference.css";
import wood from "../icons/wood.svg";
import woodback from "../icons/wood_back.svg";

const Reference = () => {
  const [value, setvalue] = useState(0);

  const stairs = [
    "https://www.stairs-siller.com/fileadmin/_processed_/6/a/csm_Stair_2_hq_03_1ccf3f1f5c.jpg",
    "https://www.proremodeler.com/sites/proremodeler/files/stair-rail-lovely-but-beautiful.jpg",
    "https://www.refreshrenovations.global/images/uploads/staircase-mobhero.jpg",
    "https://cdn.vox-cdn.com/thumbor/w0FSXUvZyUZe_pHFlWZMP2oj50U=/0x0:3000x2000/1400x1050/filters:focal(1260x760:1740x1240):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/65889868/iStock_1047941552.7.jpg",
    "https://blog.newhomesource.com/wp-content/uploads/2020/01/staircase.jpg",
    "https://optimise-design.com/wp-content/uploads/2017/12/stairs_main.jpg",
  ];

  const cupboard = [
    "https://5.imimg.com/data5/NK/RD/MY-8946719/wooden-wall-cabinet-500x500.jpg",
    "https://www.ulcdn.net/images/products/293388/original/Hilton_Three_Door_One_Drawer_LP.jpg?1584697652",
    "https://i.pinimg.com/originals/45/30/17/4530173fb9983841f4cf1e514d0a9a4a.jpg",
  ];

  const furniture = [
    "https://lookinggoodfurniture.com/wp-content/uploads/2017/11/s-design-2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRNmJjspUSbzZIOBJDmGES0jYnYDNwlOLWA&usqp=CAU",
    "https://www.raftfurniture.co.uk/pub/media/wysiwyg/furniturePicNew.jpg",
  ];

  const handleChange = (event, newValue) => {
    setvalue(newValue);
  };
  return (
    <div id="reference" style={{ position: "relative" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Lépcsők" />
        <Tab label="Szekrények" />
        <Tab label="Bútorok" />
      </Tabs>
      <img src={wood} alt="wood" className="Reference__Img" />
      <ImageBox value={0} index={value} images={stairs} />
      <ImageBox value={1} index={value} images={cupboard} />
      <ImageBox value={2} index={value} images={furniture} />
      <img src={woodback} alt="woodback" className="Reference__Imgback" />
    </div>
  );
};

export default Reference;
