import React, { Component } from "react";

type State = {
  name: string;
};

export default class ComponentReact extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
        name: "Rikkei Academy",
        };
    }
    change = () => {
        this.setState({ name: "Rikkei Soft" });
    };

    render() {
        return (
        <div>
            <h2>Company: {this.state.name}</h2>
            <button onClick={this.change}>Change</button>
        </div>
        );
    }
}