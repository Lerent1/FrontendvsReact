import React from "react";

export default function Register() {
  return (
    <div>
      <div>
        <h1>Create account</h1>
        <form>
          <label htmlFor="">Your email</label><br />
          <input type="text"/><br />
          <label htmlFor="">Password</label><br />
          <input type="password"/><br />
          <label htmlFor="">Comfirm password</label><br />
          <input type="password"/><br />
          <button type="submit">Register</button>
        </form>
        <p>Already have an accout? <b>Login here</b></p>
      </div>
    </div>
  );
}