import React, { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div>
        <h1>Cuon toi noi dung</h1>
        <button onClick={handleScroll}>Đi tới phần nội dung</button>
      </div>
      <div style={{ height: "500px" }}>
        <p>Day la noi dung gia lap de tao khoang cach cho trag</p>
        <p>Day la noi dung gia lap de tao khoang cach cho trag</p>
        <p>Day la noi dung gia lap de tao khoang cach cho trag</p>
      </div>
      <div ref={sectionRef}>
        Day la phan muc tieu
      </div>
    </div>
  );
}