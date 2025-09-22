import React, { Component } from 'react'
import Children_Comp from './Children_Comp'

export default class Parent_Comp extends Component {
  render() {
    return (
      <div>
        <h2>Ho va ten ben component cha: Nguyen Tuan Minh</h2>
        <Children_Comp></Children_Comp>
      </div>
    )
  }
}
