import React, { Component } from "react";

type State = {
  name: string;
};

export default class Slogan extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
        name: "Hoc code dee di lam",
        };
    }
    change = () => {
        this.setState({ name: "Hoc code de thang cong, co len" });
    };

    render() {
        return (
        <div>
            <h2>Slogan: {this.state.name}</h2>
            <button onClick={this.change}>Change</button>
        </div>
        );
    }
}