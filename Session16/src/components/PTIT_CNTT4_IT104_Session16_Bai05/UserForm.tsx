import React, { Component } from "react";

type User = {
  name: string;
  email: string;
  age: string;
};

type State = {
  user: User;
  error: string;
  check:boolean
};

export default class Baitap5 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        age: "",
      },
      error: "",
      check:false
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };
  handleSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email } = this.state.user;
    if (!email.includes("@")) {
      this.setState({ error: "Email khong hop le",check:false });
    }else{
        this.setState({check:true})
    }
  };

  render() {
    return (
      <div>
        <h1>Nhap thong tin nguoi dung</h1>
        <form onSubmit={this.handleSubmitted}>
          <input type="text" placeholder="Ho ten" name="name" onChange={this.handleChange}/><br />
          <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/><br />
          <input type="text" placeholder="Tuoi" name="age" onChange={this.handleChange}/><br />
          <button type="submit">Gui</button> &nbsp;
          <button type="submit">Xoa tat ca</button>
          {this.state.check?"Hien thi thonng tin user":""}
        </form>
      </div>
    );
  }
}