import React from "react";
import "./Card.css";

import Image from "../HeaderComponents/ImageThumbnail.js";
import Banner from "./CardBanner.js";

export default function() {
  return (
    <div className="contentContainer">
      <Image
        source="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"
        style={{ width: 540 }}
      />
      <Banner />
    </div>
  );
}
