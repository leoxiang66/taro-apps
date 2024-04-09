import React from "react";
import { Clickable } from "leo-react/dist";

function Card({ title, onClick, width = "100px", height = "100px" }) {
  return (
    <Clickable onClick={() => onClick()}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${width}`,
          height: `${height}`,
          backgroundColor: "white",
          borderRadius: "10px"
        }}
      >
        <h1 style={{ fontSize: 20, textAlign: "center" }}>
          {title}
        </h1>
      </div>
    </Clickable>
  );
}

export default Card;
