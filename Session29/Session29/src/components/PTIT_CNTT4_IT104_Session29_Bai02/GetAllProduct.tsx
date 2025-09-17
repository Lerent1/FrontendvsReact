import React, { useEffect } from "react";

type Product = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};

export default function GetAllProduct() {
  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data: Product[]) => {
        console.log("Danh sach san pham:", data);
      })
      .catch((error) => console.error("Loi:", error));
  }, []);

  return (
    <div>

    </div>
  );
}