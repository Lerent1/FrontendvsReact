import React, { Component } from 'react'

type information = {
    id: number,
    name: string,
    date: string,
    address: string,
}

export default class Exercises02 extends Component<{}, information> {
    constructor(props: {}){
        super(props);
        this.state = {
            id: 19,
            name: "Nguyen Tuan Minh",
            date: "16/07/2006",
            address: "Ha Noi",
        }
    }
  render() {
    return (
      <div>
        <h1>Thong tin ca nhan</h1>
        <p>Id: {this.state.id}</p>
        <p>Id: {this.state.name}</p>
        <p>Id: {this.state.date}</p>
        <p>Id: {this.state.address}</p>
      </div>
    )
  }
}
