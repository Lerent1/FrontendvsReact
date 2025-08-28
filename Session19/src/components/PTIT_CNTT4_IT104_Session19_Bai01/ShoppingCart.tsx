import React, { useMemo } from 'react'

type Product = {
    id: number;
    name: string;
    price: number;
    quanlity: number;
}

export default function ShoppingCart() {
    const Product: Product[] = [
        {
            id: 1,
            name: "San pham A",
            price: 100000,
            quanlity: 1,
        },
        {
            id: 2,
            name: "San pham B",
            price: 200000,
            quanlity: 2,
        }
    ]
    const total = useMemo(() => {
        return Product.reduce(
            (sum, item) => sum + item.price * item.quanlity, 0
        );
    }, [Product]);

  return (
    <div>
      <h2>Gio hang</h2>
      {Product.length == 0 ? (
        <p>Gio hang dang trong</p>
      ) : (
        <ul>
            {Product.map((item) => (
            <li key={item.id}>
              {item.name} (x{item.quanlity}) - {item.price * item.quanlity}₫
            </li>
          ))}
        </ul>
      )}
       <p>Tong: {total}₫</p>
    </div>
  )
}
