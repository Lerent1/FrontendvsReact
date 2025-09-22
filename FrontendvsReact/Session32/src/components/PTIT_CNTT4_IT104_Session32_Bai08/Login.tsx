import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = useSelector((state: any) => state.bai78.isLogin);

  return (
    <div>
      <h1>Dang nhap</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)}/><br />
      <input type="password" onChange={(e) => setPassword(e.target.value)}/><br />
      <button onClick={() => dispatch({ type: "LOGIN", payload: { email, password } })}>
        Dang nhap
      </button>
      {isLogin && <p>Dang nhap thanh cong</p>}
    </div>
  );
}