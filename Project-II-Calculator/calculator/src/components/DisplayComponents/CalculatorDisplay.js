import React from "react";
import "./Display.css";

export default props => {
  let display = props.number;
  const propsStr = props.number.toString();

  // Only display 9 characters at most
  if (propsStr.length > 9) {
    // Look at the first 9 characters to see if one is a period
    if (propsStr.substring(0, 9).indexOf(".") > -1) {
      // If a period is found, check to see if it's the last character.
      // If it is, don't include it in the display.  Otherwise, include all 9
      // characters
      display =
        propsStr[8] === "."
          ? propsStr.substring(0, 8)
          : propsStr.substring(0, 9);
    } else {
      // If the display is greater than 9 characters but no period is found in
      // the first 9 letters, it's a large number.  Regardless if the period comes
      // later or not, I want to truncate the number from 1000000 --> 1.0x10^6
      // or 1,200,000 --> 1.2x10^6
      // 1,000,000,000
      // Check for a period in the entire number
      const period = propsStr.indexOf(".");
      // If a period is found, count from after the first index to the period
      // for 'power'.  Otherwise, just count to the end of the number
      const power =
        period === -1
          ? propsStr.substring(1).length
          : propsStr(1, period).length;
      display = `${propsStr[0]}.${propsStr[1]}x10^${power}`;
    }
  }

  return <div className="calculator-display">{display}</div>;
};
