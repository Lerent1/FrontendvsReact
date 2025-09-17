import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
        <h2>My Blog</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/blog/posts">Posts</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
    </div>
  );
}