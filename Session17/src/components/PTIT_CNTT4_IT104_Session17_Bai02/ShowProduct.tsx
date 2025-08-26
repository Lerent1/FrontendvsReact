import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

export default function ShowProduct() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Coca cola",
    price: "1000 $",
    quantity: 10,
  });

  return (
    <div>
      <h2>Thong tin san pham</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}