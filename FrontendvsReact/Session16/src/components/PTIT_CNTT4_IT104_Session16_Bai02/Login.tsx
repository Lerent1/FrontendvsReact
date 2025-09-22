import React, { Component } from 'react'

type State = {
  isLoginStatus: boolean,
}

export default class Login extends Component<{}, State> {
  constructor(props: {}){
    super(props);
    this.state = {
      isLoginStatus: false,
    }
  }
  handleToggle = () => {
    this.setState((problem) => ({
      isLoginStatus: !problem.isLoginStatus,
    }))
  }

  render() {
    return (
      <div>
        <h2>{this.state.isLoginStatus ? <p>Xin chao User</p> : <p>Vui long dang nhap de tiep tuc</p>}</h2>
        <button onClick={this.handleToggle}>{this.state.isLoginStatus ? <p>Dang xuat</p> : <p>Dang nhap</p>}</button><br /><br />
      </div>
    )
  }
}
