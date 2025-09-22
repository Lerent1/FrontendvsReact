import React, { Component } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, phone } = this.state;
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Ko duoc de trong");
      return;
    }
    let users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const isExist = users.some((u) => u.email === email);
    if (isExist) {
      alert("Email da ton tai");
      return;
    }
    const newUser: User = { name, email, password, phone };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
    });
    alert("Dk thanh cong");
  };

  render() {
    return (
      <div>
        <h2>Dang ky tai khoan</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Ten sinh vien:</label><br />
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          </div><br/>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </div><br/>
          <div>
            <label>Mat khau:</label><br />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div><br/>
          <div>
            <label>So dien thoai:</label><br/>
            <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
          </div><br/>
          <button style={{ backgroundColor: "aqua", width: "170px" }} type="submit">Dang ky</button>
        </form>
      </div>
    );
  }
}