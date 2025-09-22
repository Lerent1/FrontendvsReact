import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Dang ky</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)}/><br />
      <input type="password" onChange={(e) => setPassword(e.target.value)}/><br />
      <button onClick={() => dispatch({ type: "REGISTER", payload: { email, password } })}>
        Dang ky
      </button>
    </div>
  );
}