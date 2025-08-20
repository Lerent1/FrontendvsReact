import React, { Component } from "react";

type Task = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type State = {
  tasks: Task[];
};

export default class Todolist extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [
        { 
            id: 1, 
            name: "Thiet ke giao dien Header", 
            assign: "Nguyen Van A", 
            status: false, 
            created_at: new Date() 
        },
        { 
            id: 2, 
            name: "Thiet ke giao dien Footer", 
            assign: "Nguyen Van B", 
            status: true, 
            created_at: new Date() 
        },
      ],
    };
  }

  formatDate(date: Date) {
    const d = date.getDate();
    const m = (date.getMonth() + 1);
    const y = date.getFullYear();
    const h = date.getHours();
    const min = date.getMinutes();
    const s = date.getSeconds();
    return `${d}/${m}/${y} ${h}:${min}:${s}`;
  }

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Ten cong viec</th>
              <th>Nguoi thuc hien</th>
              <th>Trang thai</th>
              <th>Thoi gian tao</th>
              <th>Chuc nang</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.assign}</td>
                <td>{task.status ? "Hoan thanh" : "Chua hoan thanh"}</td>
                <td>{this.formatDate(task.created_at)}</td>
                <td>
                  <button style={{margin: "5px"}}>Sua</button>
                  <button>Xoa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}