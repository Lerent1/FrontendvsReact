import React, { useEffect, useReducer } from "react";

type Task = {
  id: number;
  task: string;
};

type StateType = {
  text: string;
  tasks: Task[];
};
  
export default function ListDelete() {
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
          id: Math.ceil(Math.random() * 10000),
          task: state.text,
        };
        return {
          text: "",
          tasks: [...state.tasks, newTask],
        };
      case "Delete":
        return {
          ...state,
          tasks: state.tasks.filter((item) => item.id !== action.id),
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

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Ban muon xoa cong viec nay");
    if (confirmDelete) {
      dispatch({ type: "Delete", id });
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Hay nhap ten con viec" onChange={handleChange} value={state.text}/>
        <button>Them</button>
      </form>
      {state.tasks.map((item) => {
        return (
          <li key={item.id}>{item.task}<button onClick={() => handleDelete(item.id)}>Xoa</button></li>
        );
      })}
    </div>
  );
}