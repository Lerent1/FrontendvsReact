import React, { useState, useCallback } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div>
          <label>Password: </label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}