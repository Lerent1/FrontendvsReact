import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const products = JSON.parse(localStorage.getItem("list") || "[]");
  const { index } = useParams();
  const product = products[Number(index)];

  if (!product) {
    return <p>Sản phẩm không tồn tại!</p>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} width={200} />
      <div>
        <p>Id: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price.toLocaleString()} VND</p>
      </div>
    </div>
  );
}