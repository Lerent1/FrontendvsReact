import React from 'react';

export default function ColorBox() {
  const boxes = ["red", "green", "blue"];

  return (
    <div style={{ display: "flex", gap: "10px"}}>
      {boxes.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: "200px",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          BOX
        </div>
      ))}
    </div>
  );
}
