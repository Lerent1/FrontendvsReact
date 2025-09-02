import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Bo dem: {timer}</h1>
    </div>
  );
}