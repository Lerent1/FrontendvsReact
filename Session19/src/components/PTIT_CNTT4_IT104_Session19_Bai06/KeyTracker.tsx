import React, { useEffect, useState } from "react";

export default function KeyTracker() {
  const [myKey, setMyKey] = useState("");
  useEffect(() => {
    const getKey = (e: KeyboardEvent) => {
      console.log(e.key);
      setMyKey(e.key);
    };
    window.addEventListener("keydown", getKey);
    return () => {
      window.removeEventListener("keydown", getKey);
    };
  }, []);

  return (
    <div>
        <p>Phim ban vua nhan: </p>
      <p>{myKey ? myKey : "Hay nhap mot phim bat ky"}</p>
    </div>
  );
}