import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  const display =
    props.number.toString().length > 9
      ? Number(props.number.toString().substr(0, 9))
      : props.number;
  return <div className="calculator-display">{display}</div>;
};

export default CalculatorDisplay;
