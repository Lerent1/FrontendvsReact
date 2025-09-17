import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Teams() {
  return (
    <div>
      <h2>Teams Page</h2>
      <Link to="1">Team 1</Link>
      <Link to="2">Team 2</Link>
      <Link to="3">Team 3</Link>
      <Outlet />
    </div>
  );
}