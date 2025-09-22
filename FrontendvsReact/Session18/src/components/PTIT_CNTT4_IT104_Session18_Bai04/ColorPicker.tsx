import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("");
  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <h2>Mau nguoi dung chon: </h2>
      <input type="color" value={color} onChange={handleChangeColor} />
      <p>Mau hien thi:</p>
      <div
        style={{
          marginTop: "10px",
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid #ccc",
        }}
      ></div>
    </div>
  );
}