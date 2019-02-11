import React from "react";
import "./Card.css";

import Header from "../HeaderComponents/HeaderContainer.js";
import Content from "./CardContent.js";

export default function() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
