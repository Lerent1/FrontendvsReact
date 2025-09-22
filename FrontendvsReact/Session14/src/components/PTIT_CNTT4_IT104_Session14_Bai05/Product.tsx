import React, { Component } from 'react'

type ProductType = {
  id: string;
  name: string;
  gia: number;
  soLuong: number;
};

export default class Product extends Component {
  state = {
    id: "",
    name: "",
    gia: 0,
    soLuong: 0,
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };
  handleSubmit = () => {
    const product: ProductType = {
      id: this.state.id,
      name: this.state.name,
      gia: Number(this.state.gia),
      soLuong: Number(this.state.soLuong)
    };
    console.log("Thong tin san pham: ", product);
  };

  render() {
    return (
      <div>
        <h2>Them moi san pham</h2>
        <label>Ma san pham</label><br />
        <input type="text" name="id" value={this.state.id} onChange={this.handleChange}/><br />
        <label>Ten san pham</label><br />
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br />
        <label>Gia</label><br />
        <input type="text" name="gia" value={this.state.gia} onChange={this.handleChange}/><br />
        <label>So luong</label><br />
        <input type="number" name="soLuong" value={this.state.soLuong} onChange={this.handleChange} min={0}/><br /><br />
        <button style={{ backgroundColor: "lightgreen", width: "170px" }} onClick={this.handleSubmit}>Dang ky</button>
      </div>
    );
  }
}