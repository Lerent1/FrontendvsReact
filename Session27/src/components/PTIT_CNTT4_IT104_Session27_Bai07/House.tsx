import React from "react";
import { Link } from "react-router-dom";

export default function Home2() {
  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Chào mừng bạn đến với ứng dụng React Router.</p>
      <Link to="/about2" className="bg-sky-300">Đi đến trang About</Link>
    </div>
  );
}