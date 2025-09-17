import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const list = JSON.parse(localStorage.getItem("list") || "[]");
  const task = list.find((t: any) => t.id === Number(id));

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>
        Quay lại
      </button>
    </div>
  );
}