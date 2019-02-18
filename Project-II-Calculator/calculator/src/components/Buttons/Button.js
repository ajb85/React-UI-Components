import React from "react";

export default function(props) {
  const sqSize = 110;
  const width = props.row * sqSize;
  const style = { width: width, height: sqSize };
  return (
    <div className={props.className} style={style}>
      {props.children}
    </div>
  );
}
