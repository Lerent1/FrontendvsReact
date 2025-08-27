import React, { useEffect, useReducer } from "react";

type Task = {
  id: number;
  task: string;
};

type StateType = {
  text: string;
  tasks: Task[];
};

export default function List() {
    const getTask = localStorage.getItem("tasks");
  const initial: StateType = {
    text: "",
    tasks: getTask ? JSON.parse(getTask) : [],
  };
  const reducer = (state: StateType, action: any): StateType => {
    switch (action.type) {
      case "SetInput":
        return { ...state, text: action.value };
      case "ADD":
        const newTask = {
          id: Math.ceil(Math.random() * 99999),
          task: state.text,
        };
        return {
          text: "",
          tasks: [...state.tasks, newTask],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SetInput", value: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Hay nhap ten con viec" onChange={handleChange} value={state.text}/>
        <button>Them</button>
      </form>
      {state.tasks.map((item) => {
        return (
          <li key={item.id}>{item.task}<button>Xoa</button></li>
        );
      })}
    </div>
  );
}