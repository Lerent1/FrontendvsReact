import React, { useEffect } from "react";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function GetAllStudent() {
  useEffect(() => {
    fetch("http://localhost:3000/student")
      .then((res) => res.json())
      .then((data: Student[]) => {
        console.log("Danh sach sinh vien:", data);
      })
      .catch((error) => console.error("Loi:", error));
  }, []);

  return (
    <div>

    </div>
  );
}