import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: IProducts[] = [
  {
    id: 1,
    name: "Iphone 15 Pro",
    price: 29990000,
    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 26990000,
    description: "Smartphone flagship của Samsung với camera 200MP.",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 28990000,
    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 31990000,
    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];

export default function List() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const key = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(key);

  useEffect(() => {
    setKeyword(key);
  }, [key]);

  const handleSearch = () => {
    const params = new URLSearchParams({ search: keyword });
    navigate(`/list?${params.toString()}`);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(key.toLowerCase())
  );

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <input type="text" value={keyword}  onChange={(e) => setKeyword(e.target.value)} className="border rounded-lg"/>
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.price}
            <br />
            <em>{p.description}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}