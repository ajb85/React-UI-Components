import React from "react";
import "./Button.css";

export default props => {
  return (
    <button className={props.buttonStyle} onClick={props.handleNumber}>
      {props.number}
    </button>
  );
};
