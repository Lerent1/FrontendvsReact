import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Trần Thị B", email: "b@gmail.com", address: "TP. HCM" },
  { id: 3, name: "Lê Văn C", email: "c@gmail.com", address: "Đà Nẵng" },
];

export default function ListUser() {
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <Link to={`/list/${user.id}`}><button>Xem chi tiết</button></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}