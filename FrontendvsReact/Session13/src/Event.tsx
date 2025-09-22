import React, { Component } from 'react'

type Task = {
    id: number,
    task: string,
    completed: boolean,
}

type InitialState = {
    todos: Task[];
}

export default class Event extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
        todos: [
            { 
                id: 1, 
                task: "phai hoc reactjs", 
                completed: false 
            },
            { 
                id: 2, 
                task: "phai hoc reactjs", 
                completed: false 
            },
            { 
                id: 3, 
                task: "phai hoc reactjs", 
                completed: false 
            },
        ],
    };
}

delete = (id: number) => {
    console.log("Đã click xóa id:", id);
    let newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
}

render() {
    return (
      <div>
        <h1>Danh sach con viec</h1>
        <ul>
          {this.state.todos.map((item) => (
            <li key={item.id}>
              {item.task}
              <button onClick={() => this.delete(item.id)}>Xoa</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}