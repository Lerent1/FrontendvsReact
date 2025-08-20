import React from "react";

type Product = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

type Props = {
  product: Product;
};

export default function Child({ product }: Props) {
  return (
    <div>
      <h2>Du lieu trong component con</h2>
      <p><b>Id:</b> {product.id}</p>
      <p><b>Product name:</b> {product.name}</p>
      <p><b>Price:</b> {product.price}</p>
      <p><b>Quantity:</b> {product.quantity}</p>
    </div>
  );
}