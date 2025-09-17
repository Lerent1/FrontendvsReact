import React from "react";

export default function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="">Your email</label><br />
          <input type="text"/><br />
          <label htmlFor="">Password</label><br />
          <input type="password"/><br />
          <button type="submit">Login</button>
        </form>
        <p>Already have an accout? <b>Register here</b></p>
      </div>
    </div>
  );
}