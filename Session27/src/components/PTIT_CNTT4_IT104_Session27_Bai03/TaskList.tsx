import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskList() {
  const tasks = [
    { 
        id: 1, 
        title: "Học React", 
        description: "Làm quen với React và component" 
    },
    { 
        id: 2, 
        title: "Học TypeScript", 
        description: "Kết hợp TS vào React" 
    },
    { 
        id: 3, 
        title: "Làm mini project", 
        description: "Ứng dụng nhỏ với React + TS" 
    },
  ];
  localStorage.setItem("list", JSON.stringify(tasks));

   return (
    <div>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <Link to={`/tasklist/${t.id}`}>
              {t.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}