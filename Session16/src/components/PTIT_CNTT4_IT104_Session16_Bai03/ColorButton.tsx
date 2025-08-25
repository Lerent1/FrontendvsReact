import React, { Component } from 'react'

type Color = {
    name: string,
    label: string,
}

type State = {
    color: Color[];
}

export default class ColorButton extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            color: [
                { name: 'primary', label: 'Blue' },
                { name: 'secondary', label: 'Gray' },
                { name: 'success', label: 'Green' },
                { name: 'danger', label: 'Yellow' },
                { name: 'warning', label: 'Red' },
                { name: 'info', label: 'Cyan' },
                { name: 'light', label: 'White' },
                { name: 'dark', label: 'Black' },
            ],
        }
    }

  render() {
    return (
        <>
        <h2>Bai 3: </h2>
            <div>
            {this.state.color.map((item, index) => (
                <button key = {index} style={{"backgroundColor": item.label}}>{item.name}</button>
            ))}
            <a href="">Link</a>
            </div>
        </>
    )
  }
}