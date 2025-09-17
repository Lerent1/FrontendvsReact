import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <p>Trang bạn tìm không tồn tại.</p>
      <div>
        <button onClick={() => navigate("/house")} className="bg-sky-300">
          Quay về trang chủ
        </button>
        <button>
          Quay lại
        </button>
      </div>
    </div>
  );
}