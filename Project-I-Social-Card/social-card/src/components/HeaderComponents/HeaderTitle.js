import React from "react";
import "./Header.css";

export default function(props) {
  const Header = props.element;
  return (
    <div>
      <Header>{props.children}</Header>
      <p className="author">@LambdaSchool</p>
      <p className="timeStamp">26 Jan</p>
    </div>
  );
}
