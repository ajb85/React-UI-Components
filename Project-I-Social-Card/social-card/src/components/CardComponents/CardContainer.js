import React from "react";
import "./Card.css";

import Header from "../HeaderComponents/HeaderContainer.js";
import Content from "./CardContent.js";

export default function() {
  return (
    <div className="cardContainer" onClick={handleClick}>
      <Header />
      <Content />
    </div>
  );
}

function handleClick(e) {
  window.location.href = "https://www.reactjs.org";
}
