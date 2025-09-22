import React, { useState } from "react";

export default function ChangeColor() {
  const [color, setColor] = useState("black");
  const handleChangeColor = () => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div>
      <h2 style={{ color: color }}>Tieu de van ban</h2>
      <button onClick={handleChangeColor}>Thay doi mau</button>
    </div>
  );
}