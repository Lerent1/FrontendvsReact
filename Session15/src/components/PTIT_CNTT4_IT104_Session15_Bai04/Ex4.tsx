import React, { Component } from 'react'

type Range = {
    pres: number;
}

export default class Ex4 extends Component<{}, Range> {
    constructor(props: {}) {
        super(props);
        this.state = {
            pres: 0,
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({pres: e.target.valueAsNumber});
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

  render() {
    return (
      <div>
        <p>Tien do hoan thanh: {this.state.pres} %</p>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="range" value={this.state.pres} onChange={this.handleChange}/><br />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}