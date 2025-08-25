import React, { Component } from "react";

type State = {
  isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  ThemeSwitcher = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    const { isDarkMode } = this.state;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black",
    };
    return (
      <div style={styles}>
        <h2>
          {isDarkMode ? "Che do toi dang bat" : "Che do sang dang bat"}
        </h2>
        <button onClick={this.ThemeSwitcher}>Chuyen theme</button>
      </div>
    );
  }
}