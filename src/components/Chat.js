import React from "react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "flex-start",
  fontWeight: "600",
  justifyContent: "center",
  backgroundColor: "#fff",
  userSelect: "none",
  color: "#000",
  border: "5px solid darkgrey",
  marginTop: "10px",
};

export default function ChatWindow({ children, index }) {
  const [width, setWidth] = React.useState(300);
  return (
    <Resizable
      style={style}
      size={{ width }}
      enable={{
        top: false,
        right: index === 1 ? false : true,
        bottom: false,
        left: index === 1 ? true : false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      minHeight="755px"
      maxHeight="755px"
      minWidth="230"
      maxWidth="300"
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
      }}
    >
      {children}
    </Resizable>
  );
}
