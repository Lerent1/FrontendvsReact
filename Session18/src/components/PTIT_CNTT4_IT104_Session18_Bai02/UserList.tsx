import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function UserList() {
  const users: User[] = [
    { id: 1, name: "Minh", age: 19 },
    { id: 2, name: "Thang", age: 18 },
    { id: 3, name: "Loc", age: 17 },
  ];
  const list = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <h2>Danh sach nguoi dung tren 18 tuoi:</h2>
      <ul>
        {list.map((user) => (
          <li key={user.id}>{user.name} - {user.age} tuoi</li>
        ))}
      </ul>
    </div>
  );
}