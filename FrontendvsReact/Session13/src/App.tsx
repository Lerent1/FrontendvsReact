import React, { Component } from 'react'

type infooo = {
  name: string,
  student: string[],
  isLogin: boolean
}

export default class App extends Component<{}, infooo> {
  constructor(props:{}){
    super(props);
    this.state = {
      name: "Minh vip pro",
      student: ["Thang", "Loc"],
      isLogin: true,
    }
  }
  handleChangeName = () => {
    this.setState({name: "Minh"});
  }
  render() {
    
    return (
      <div>
        <p>Ten: {this.state.name}</p>
        <ul>
          {this.state.student.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={this.handleChangeName}>click me</button>
      </div>
    )
  }
}
