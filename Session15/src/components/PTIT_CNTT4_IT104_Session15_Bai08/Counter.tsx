import React, { Component } from 'react'
type State={
    counter: number
}
export default class Counter extends Component<{}, State> {
    time: number
    constructor(props: {}){
        super(props);
        this.state={
            counter: 0,
        }
        this.time= 0
    }
    componentDidMount(): void {
        this.time=setInterval(()=>{this.setState({counter: this.state.counter == 10 ? 0 : this.state.counter +1 })
        }, 1000);
    }
    componentWillUnmount(): void {
        clearInterval(this.time);
    }
  render() {
    return (
      <div>
        {this.state.counter}
      </div>
    )
  }
}