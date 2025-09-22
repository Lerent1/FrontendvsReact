import React, { Component } from "react";

type State = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class Color extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: "light",
      language: "english",
    };
  }

  toggleTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  toggleLanguage = () => {
    this.setState((prev) => ({
      language: prev.language === "english" ? "vietnamese" : "english",
    }));
  };

  render() {
    const { theme, language } = this.state;

    const appStyle = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      height: "200px",
      padding: "20px",
    };

    return (
      <div style={appStyle}>
        {language === "english" ? (
          <p>Ngon ngu: Vietnamese</p>
        ) : (
          <p>Ngon ngu: Tieng Viet</p>
        )}

        {theme === "light" ? (
          <p>Nen: Mau trang</p>
        ) : (
          <p>Nen: Mau den</p>
        )}

        <button onClick={this.toggleTheme}>Theme</button>
        <button style={{ marginLeft: "10px" }} onClick={this.toggleLanguage}>
          Language
        </button>
      </div>
    );
  }
}