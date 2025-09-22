import React from 'react'

export default function UserInfo() {
  const user = {
    name: "Nguyen Van A",
    gender: "Nam",
    date: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuan, Ha Noi",
  };

  return (
    <div>
      <h1>Thong tin ca nhan</h1>
      <ul>
        <li>Ho va ten:<b>{user.name}</b></li>
        <li>Gioi tinh:<b>{user.gender}</b></li>
        <li>Ngay sinh:<b>{user.date}</b></li>
        <li>Email:<b>{user.email}</b></li>
        <li>Dia chi:<b>{user.address}</b></li>
      </ul>
    </div>
  );
}
