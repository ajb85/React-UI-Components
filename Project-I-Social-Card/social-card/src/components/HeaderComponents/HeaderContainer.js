import React from "react";
import "./Header.css";

import Title from "./HeaderTitle.js";
import Content from "./HeaderContent.js";
import Image from "./ImageThumbnail.js";

export default function() {
  const para =
    "Let's learn React by building simple interfaces with components.  DOn't try to overthink it, just keep it simple and have fun!  Once you feel comfortable using components you are well on your way to mastering React!";
  return (
    <div className="headerContainer">
      <div className="headerImage">
        <Image
          source="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
          style={{ width: 30, height: 30 }}
        />
      </div>
      <div className="titleContainer">
        <Title element="h2" children="Lambda School" />
        <Content children={para} />
      </div>
    </div>
  );
}
