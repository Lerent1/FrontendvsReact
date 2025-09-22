import React, { Component } from "react";
import "./List.css";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default class List extends Component {
  products: ProductType[] = [
    {
      id: 1,
      name: "Điện thoại Iphone15 Promax",
      price: 20000000,
      image:
        "https://cdn2.fptshop.com.vn/unsafe/800x0/op_lung_iphone_16_pro_max_clear_case_with_magsafe_6_e469d27f73.jpg",
    },
    {
      id: 2,
      name: "Điện thoại Iphone7G",
      price: 3000000,
      image:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg",
    },
    {
      id: 3,
      name: "Điện thoại Samsung Galaxy",
      price: 21000000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvaWs_C7kIIQoBTodDmkXXeAUP8d3ahEUvA&s",
    },
    {
      id: 4,
      name: "Điện thoại",
      price: 51000000,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvaWs_C7kIIQoBTodDmkXXeAUP8d3ahEUvA&s",
    },
  ];

  render() {
    return (
      <div>
        <div className="header-bar">
          <span>Trang chủ</span>
          <span>Danh sách sản phẩm</span>
          <div className="header-cart">🛒</div>
        </div>

        <h2 style={{ paddingLeft: "32px" }}>Danh sách sản phẩm</h2>
        <div className="product-list">
          {this.products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} className="product-img" />
              <div className="product-name">{p.name}</div>
              <div className="product-price">
                {p.price.toLocaleString()} đ
              </div>
              <button className="product-btn">Thêm vào giỏ</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
