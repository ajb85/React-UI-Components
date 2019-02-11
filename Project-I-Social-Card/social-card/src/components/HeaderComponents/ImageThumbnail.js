import React from "react";
import "./Header.css";

export default function(props) {
  return <img src={props.source} alt={props.altText} style={props.style} />;
}
