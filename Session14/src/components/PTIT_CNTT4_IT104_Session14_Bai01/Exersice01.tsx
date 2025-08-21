import React, { Component } from "react";

type State = {
  userName: string;
};

export default class Exercise01 extends Component<{}, State> {
  state: State = {
    userName: "Nguyen Tuan Minh",
  };

  render() {
    return (
      <div>
        <p>Ten cua toi: {this.state.userName}</p>
      </div>
    );
  }
}
