import React from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'

export default function About() {
    const navigate1 = useNavigate();
    const handleLogin = () => {
        navigate1("/login");
    }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
