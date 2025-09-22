import React, { Component } from 'react'

type BirdDay = {
    birdDay: string;
    found: boolean;
}

export default class Date extends Component<{}, BirdDay> {
    constructor(props: {}) {
        super(props);
        this.state = {
            birdDay: "",
            found: false,
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({birdDay: e.target.value});
        this.setState({found: false})
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({found: true})
    }

  render() {
    return (
      <div>
        <h1>Ngay sinh: {this.state.found ? this.state.birdDay : ""}</h1>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="date" onChange={this.handleChange}/><br />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}