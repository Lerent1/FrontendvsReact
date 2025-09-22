import React, { Component } from 'react'

type Color = {
    color: string;
    found: boolean;
}

export default class ChangeColor extends Component<{}, Color> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: "",
            found: false,
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({color: e.target.value});
        this.setState({found: false})
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({found: true})
    }

  render() {
    return (
      <div>
        <h1>Color: {this.state.color}</h1>
        <h2>Form</h2>
        <p>Mau sac</p>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="color" onChange={this.handleChange}/><br />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
