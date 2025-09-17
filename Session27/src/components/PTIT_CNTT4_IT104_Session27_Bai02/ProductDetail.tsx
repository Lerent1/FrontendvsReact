import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const list = JSON.parse(localStorage.getItem("list") || "[]");
  const product = list.find((item: { id: number; }) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>San pham khong ton tai</h2>
        <Link to="/productlist">Quay lai danh sach</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiet san pham</h2>
      <div><b>Ten:</b> {product.name}</div>
      <div><b>Gia:</b> {product.price} VND</div>
      <p>Mo ta chi tiet: Day la mo ta chi tiet</p>
      <Link to="/productlist" className='bg-sky-300 border rounded-lg w-30'>Quay lai danh sach</Link>
    </div>
  );
}