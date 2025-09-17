import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Trần Thị B", email: "b@gmail.com", address: "TP. HCM" },
  { id: 3, name: "Lê Văn C", email: "c@gmail.com", address: "Đà Nẵng" },
];

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(u => u.id === Number(id));

  if (!user) return (
    <div>
      <h2>Người dùng không tồn tại</h2>
      <button onClick={() => navigate('/')}>Quay lại danh sách</button>
    </div>
  );

  return (
    <div>
      <h2>Chi tiết người dùng</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <button onClick={() => navigate('/')}>Quay lại danh sách</button>
    </div>
  );
}