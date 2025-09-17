import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Show() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("home");
  };

  const goProduct = () => {
    navigate("product");
  };

  const goDetail = () => {
    navigate("detail");
  };

  return (
    <div>
      <div>
        <button onClick={goHome}>
          Đi tới Home
        </button>
        <button onClick={goProduct}>
          Đi tới Product
        </button>
        <button onClick={goDetail}>
          Đi tới Detail
        </button>
      </div>
      <Outlet />
    </div>
  );
}
