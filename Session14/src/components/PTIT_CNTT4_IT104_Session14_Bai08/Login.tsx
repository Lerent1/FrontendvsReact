import React, { Component } from "react";

type State = {
  email: string;
  password: string;
};

export default class Login extends Component<{}, State> {
  state: State = {
    email: "",
    password: "",
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email.trim() || !password.trim()) {
      alert("Ko duoc de trong");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (check: { email: string; password: string }) =>
        check.email === email && check.password === password
    );
    if (user) {
      alert("Dang nhap thanh cong");
      this.setState({ email: "", password: "" });
    } else {
      alert("Dang nhap that bai");
    }
  };

  render() {
    return (
      <div>
        <h2>Dang nhap tai khoan</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label><br />
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          </div><br/>
          <div>
            <label>Mat khau:</label><br />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </div><br/>
          <button type="submit" style={{ backgroundColor: "lightblue" }}>Dang nhap</button>
        </form>
      </div>
    );
  }
}