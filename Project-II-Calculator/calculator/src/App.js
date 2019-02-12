import React from "react";
import "./css/index.css";
import Button from "./components/Buttons/Button.js";
const buildCalc = [
  {
    rowCount: 4,
    class: "display",
    children: 0
  },
  {
    rowCount: 3,
    class: "button clear",
    children: "clear"
  },
  {
    rowCount: 1,
    class: "button operator",
    children: "÷"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "7"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "8"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "9"
  },
  {
    rowCount: 1,
    class: "button operator",
    children: "x"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "4"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "5"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "6"
  },
  {
    rowCount: 1,
    class: "button operator",
    children: "-"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "1"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "2"
  },
  {
    rowCount: 1,
    class: "button num",
    children: "3"
  },
  {
    rowCount: 1,
    class: "button operator",
    children: "+"
  },
  {
    rowCount: 3,
    class: "button num",
    children: "0"
  },
  {
    rowCount: 1,
    class: "button operator",
    children: "="
  }
];

const App = () => {
  const buttons = buildCalc.map(button => {
    return (
      <Button
        row={button.rowCount}
        className={button.class}
        children={button.children}
      />
    );
  });
  return <div className="container calc">{buttons}</div>;
};

export default App;
