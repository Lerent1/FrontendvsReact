import React, { Component } from 'react'

type State = {
    email: string;
}

export default class Email extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            email: "",
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: e.target.value});
    }
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({email: this.state.email});
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <h1>From</h1>
            <label htmlFor="">Email</label><br />
            <input type="email" value={this.state.email} onChange={this.handleChange}/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
