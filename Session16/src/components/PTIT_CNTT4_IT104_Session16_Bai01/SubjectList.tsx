import React, { Component } from 'react'

type State = {
    subject: string[];
}

export default class SubjectList extends Component<{}, State> {
    subject: any;
    constructor(props: {}){
        super(props);
        this.state = {
            subject: ["Toán", "Văn", "Anh", "Hóa", "Sinh"],
        }
    }
    
  render() {
    return (
      <div>
        <h1>Danh sach mon hoc</h1>
        <div>
            {this.state.subject.map((item, index) => (
                <div><button key = {index}>{item}</button></div>
            ))}
        </div>
      </div>
    )
  }
}
