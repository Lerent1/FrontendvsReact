import React from "react";
import { Link } from "react-router-dom";

export default function About2() {
  return (
    <div>
      <h1>About</h1>
      <p>Đây là trang giới thiệu.</p>
      <Link to="/house" className="bg-sky-300">Quay về trang chủ</Link>
    </div>
  );
}