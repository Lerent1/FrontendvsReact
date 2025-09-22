import React, { Component } from 'react'

type IntialState = {
  user: {
    email: string,
    password: string,
  }
}

export default class App extends Component<{}, IntialState> {
  constructor(props: {}){
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      }
    }
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Gia tri khi nhap", this.state.user);
    this.setState
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Gia tri name", e.target.name);
    const {name, value} = e.target;
    this.setState({
      user: {...this.state.user, [name]: value}
    })
  }

  render() {
    return (
      <div>
        Ky thuat Controll
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">Password</label>
          <input type="text" onChange={this.handleChange}/><br/>
          <label htmlFor="">Email</label>
          <button>Login</button>
        </form>
      </div>
    )
  }
}
