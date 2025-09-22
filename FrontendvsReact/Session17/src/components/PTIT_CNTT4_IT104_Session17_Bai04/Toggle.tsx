import React, { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {!isVisible && <h2>Tieu de van ban</h2>}
      <button onClick={handleToggle}>{!isVisible ? "An" : "Hien"}</button>
    </div>
  );
}
