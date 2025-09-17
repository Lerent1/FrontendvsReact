import React, { useEffect } from "react";
import axios from "axios";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function GetStudentById() {
  const getStudentById = async (id: number) => {
      const res = await axios.get<Student>(`http://localhost:3000/student/${id}`);
      if (res.data) {
        console.log("Thong tin sinh vien:", res.data);
      } else {
        console.log("Khong tim thay");
      }
  };

  useEffect(() => {
    getStudentById(1);
  }, []);

  return (
    <div>
      
    </div>
  );
}