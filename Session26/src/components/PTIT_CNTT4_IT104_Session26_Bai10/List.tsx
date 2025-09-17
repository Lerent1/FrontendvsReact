import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    price: 3000000,
    image: "https://cdn.tgdd.vn/Products/Images/42/303829/iphone-15-pro-max.jpg"
  },
  {
    id: 2,
    name: "Oppo Reno11 5G",
    price: 6000000,
    image: "https://cdn.tgdd.vn/Products/Images/42/308829/oppo-reno11-5g.jpg"
  },
  {
    id: 3,
    name: "Vivo Y17s",
    price: 9000000,
    image: "https://cdn.tgdd.vn/Products/Images/42/307829/vivo-y17s.jpg"
  },
];
localStorage.setItem("list", JSON.stringify(products));

export default function List() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const target = searchParams.get("name") || "";
  const [search, setSearch] = useState(target);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(target.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={() => setSearchParams({ name: search })}>Tìm kiếm</button>
      <br />
      <div>
        {filteredProducts.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} width={150} />
            <div>{item.name}</div>
            <div>{item.price.toLocaleString()} VND</div>
            <button onClick={() => navigate(`/list/${index + 1}`)}>Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
}