import React from "react";
import "./Card.css";

import Header from "../HeaderComponents/HeaderContainer.js";
import Content from "./CardContent.js";
import Footer from "../FooterComponents/Footer.js";

export default function() {
  return (
    <div className="cardContainer">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
