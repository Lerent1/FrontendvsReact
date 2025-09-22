import React, { useReducer } from "react";

export default function Gender() {
  const initial = { gender: "Nam" };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SETGENDER":
        return { ...state, gender: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SETGENDER", payload: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="radio" name="gender" value="Nam" checked={state.gender === "Nam"} onChange={handleChange}/>
          <label>Nam</label>
        </div>
        <div>
          <input type="radio" name="gender" value="Nu" checked={state.gender === "Nu"} onChange={handleChange}/>
          <label>Nu</label>
        </div>
        <div>
          <input type="radio" name="gender" value="Khac" checked={state.gender === "Khac"} onChange={handleChange}/>
          <label>Khac</label>
        </div>
        <h3>Selected gender: {state.gender}</h3>
      </form>
    </div>
  );
}