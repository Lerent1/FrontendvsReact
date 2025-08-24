import React, { Component } from "react";
type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};
type InitialState = {
  tasks: Task[];
  input: string;
};
export default class Baitap9 extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
      //   tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
      tasks: [
        {
          id: 1,
          taskName: "công việc 1",
          completed: true,
        },
        {
          id: 2,
          taskName: "công việc 2",
          completed: true,
        },
        {
          id: 3,
          taskName: "công việc 3",
          completed: false,
        },
      ],
      input: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };
  handleDelete = (id: number) => {
    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== id),
    });
  };

  render() {
    return (
      <div>
        <h1>DANH SÁCH CÔNG VIỆC</h1>
        <input type="text" placeholder="thêm công việc" onChange={this.handleChange}/>
        <button>Thêm</button>
        <ul>
          {this.state.tasks.map((item, index) => {
            return (
              <ol>
                <input checked={item.completed === true} type="checkbox" />
                {item.completed ? (
                  <span style={{ textDecoration: "line-through" }}>
                    {item.taskName}
                  </span>
                ) : (
                  <span>{item.taskName}</span>
                )}
                <button>Sửa</button>
                <button onClick={() => this.handleDelete(item.id)}>Xóa</button>
              </ol>
            );
          })}
        </ul>
        <p>Số lượng công việc hoàn thành / tổng số công việc</p>
      </div>
    );
  }
}