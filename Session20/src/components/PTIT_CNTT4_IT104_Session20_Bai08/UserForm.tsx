import React, { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

const initial: State = {
  name: "",
  email: "",
};

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initial);
  function reducer(state: State, action: any): State {
    switch (action.type) {
        case "SET_NAME":
        return { ...state, name: action.payload };
        case "SET_EMAIL":
        return { ...state, email: action.payload };
        default:
        return state;
    }
  }

  return (
    <div>
      <h2>User Information Form</h2>

      <div>
        <label>Ten:</label><br />
        <input
          type="text"
          value={state.name} onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }/>
      </div>

      <div>
        <label>Email:</label><br />
        <input type="email" value={state.email} onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }/>
      </div>

      <div>
        <p><strong>Ten:</strong> {state.name || "Chua nhap"}</p>
        <p><strong>Email:</strong> {state.email || "Chua nhap"}</p>
      </div>
    </div>
  );
}