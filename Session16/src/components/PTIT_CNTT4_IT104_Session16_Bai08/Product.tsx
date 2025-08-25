import React, { Component } from "react";
import "./Product.css"

export type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = {
  product: ProductType;
  quantity: number;
};

type State = {
  cart: CartItem[];
  showCart: boolean;
};

export default class Product extends Component<object, State> {
  state: State = {
    cart: [],
    showCart: false,
  };

  products: ProductType[] = [
    {
      id: 1,
      name: "Điện thoại Iphone15 Promax",
      price: 20000000,
      image:"https://cdn2.fptshop.com.vn/unsafe/800x0/op_lung_iphone_16_pro_max_clear_case_with_magsafe_6_e469d27f73.jpg",
    },
    {
      id: 2,
      name: "Điện thoại Iphone7G",
      price: 3000000,
      image:"https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg",
    },
    {
      id: 3,
      name: "Điện thoại Samsung Galaxy",
      price: 21000000,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvaWs_C7kIIQoBTodDmkXXeAUP8d3ahEUvA&s",
    },
    {
      id: 4,
      name: "Điện thoại",
      price: 51000000,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvaWs_C7kIIQoBTodDmkXXeAUP8d3ahEUvA&s",
    },
  ];
  addToCart = (product: ProductType) => {
    const { cart } = this.state;
    const found = cart.find((item) => item.product.id === product.id);
    if (found) {
      this.setState({
        cart: cart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      this.setState({ cart: [...cart, { product, quantity: 1 }] });
    }
  };
  increaseQuantity = (id: number) => {
    this.setState({
      cart: this.state.cart.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    });
  };
  decreaseQuantity = (id: number) => {
    this.setState({
      cart: this.state.cart
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    });
  };
  removeFromCart = (id: number) => {
    this.setState({
      cart: this.state.cart.filter((item) => item.product.id !== id),
    });
  };
  getTotalPrice = () => {
    return this.state.cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  render() {
    const { cart, showCart } = this.state;
    return (
      <div>
        <div className="header-bar">
          <span>Trang chủ</span>
          <span>Danh sách sản phẩm</span>
          <div className="header-cart" onClick={() => this.setState({ showCart: !showCart })}>🛒
            {cart.length > 0 && (
              <span className="header-cart-count">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>

        {showCart && (
          <div className="cart-popup">
            <h3>Giỏ hàng</h3>
            {cart.length === 0 ? (
              <p>Chưa có sản phẩm nào.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="cart-img"
                    />
                    <span className="cart-name">{item.product.name}</span>
                    <div className="cart-actions">
                      <button onClick={() => this.decreaseQuantity(item.product.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => this.increaseQuantity(item.product.id)}>+</button>
                      <button onClick={() => this.removeFromCart(item.product.id)}></button>
                    </div>
                  </div>
                ))}
                <hr />
                <div className="cart-total">
                  Tổng tiền:{" "}
                  {this.getTotalPrice().toLocaleString() + "đ"}
                </div>
              </div>
            )}
          </div>
        )}
        <h2 style={{ paddingLeft: "32px" }}>Danh sách sản phẩm</h2>
        <div className="product-list">
          {this.products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} className="product-img" />
              <div className="product-name">{p.name}</div>
              <div className="product-price">
                {p.price.toLocaleString("vi-VN")} đ
              </div>
              <button className="product-btn" onClick={() => this.addToCart(p)}>Thêm vào giỏ</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
