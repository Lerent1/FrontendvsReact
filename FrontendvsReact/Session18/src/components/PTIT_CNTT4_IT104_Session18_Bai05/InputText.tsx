import React, { useReducer } from "react";

export default function InputText() {
  const initial = { text: "" };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "SETTEXT":
        return { ...state, text: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SETTEXT", payload: e.target.value });
  };

  return (
    <div>
      <p>Chuoi nhap: {state.text}</p>
      <input type="text" value={state.text} onChange={handleChange}/>
    </div>
  );
}