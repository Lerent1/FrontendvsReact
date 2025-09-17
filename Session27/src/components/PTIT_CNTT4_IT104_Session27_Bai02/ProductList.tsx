import React from 'react'
import { useNavigate} from 'react-router-dom';

const list = [
    {
        id: 1,
        name: "Laptop Dell XPS 13",
        price: 35000000,
    },
    {
        id: 2,
        name: "Iphone 16 pro max",
        price: 50000000,
    },
    {
        id: 3,
        name: "Samsung Galaxy",
        price: 35000000,
    },
]
localStorage.setItem("list", JSON.stringify(list));

export default function ProductList() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='bg-blue-300 flex justify-center item-center h-20 color-white'>
        <div>
          <h1>Trang chi tiet san pham</h1>
        </div>
      </div>
      <div className='flex justify-center item-center gap-5'>
        {list.map((item, index) => (
          <div key={index}>
            <div>{item.name}</div>
            <div>{item.price} VND</div>
            <button onClick={() => navigate(`/productlist/${index + 1}`)} className='bg-sky-300 border rounded-lg w-30'>Xem chi tiet</button>
          </div>
        ))}
      </div>
    </div>
  );
}