import React, { useReducer, useState } from "react";

const initialState = {
  loading: false,
  success: false,
  error: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: false };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: false };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: true };
    default:
      return state;
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR" });
      }
    }, 2000);
  };

  return (
    <div>
      <h2>Dang nhap</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Ten nguoi dung</label><br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Mat khau</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Dang nhap</button>
      </form>

      <div>
        {state.loading && <p>Dang dang nhap...</p>}
        {state.success && <p style={{ color: "green" }}>Dang nhap thanh cong</p>}
        {state.error && <p style={{ color: "red" }}>Dang nhap that bai</p>}
      </div>
    </div>
  );
}