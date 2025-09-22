import React, { Component } from "react";

export default class Gender extends Component {
  state = {
    gender: "",
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.gender) {
      console.log("Gioi tinh duoc chon la:", this.state.gender);
    } else {
      alert("Hay chon gioi tinh");
    }
  };

  render() {
    return (
      <div>
        <h2>Gioi tinh: {this.state.gender}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="radio" name="" value="Nam" checked={this.state.gender === "Nam"} onChange={this.handleChange}/>
            <label>Nam</label>
          </div>
          <div>
            <input type="radio" name="" value="Nu" checked={this.state.gender === "Nu"} onChange={this.handleChange}/>
            <label>Nu</label>
          </div>
          <div>
            <input type="radio" name="" value="Khac" checked={this.state.gender === "Khac"} onChange={this.handleChange}/>
            <label>Khac</label>
          </div><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}