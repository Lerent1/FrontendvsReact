import React, { Component } from "react";

type State = {
  time: Date;
};

export default class Clock extends Component<{}, State> {
  private timerId: number | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
        time: new Date(),
    };
  }
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
  formatTime(date: Date) {
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return `${h}:${m}:${s}`;
  }

  render() {
    return (
      <div>
        <p>Thoi gian hien tai: {this.formatTime(this.state.time)}</p>
      </div>
    );
  }
}