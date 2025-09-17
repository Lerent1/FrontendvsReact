import React, { useState } from "react";
import axios from "axios";

type Student = {
  id?: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export default function CreateStudent() {
  const [form, setForm] = useState<Student>({
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const createStudent = async () => {
    try {
      const res = await axios.post<Student>("http://localhost:3000/student", form);
      console.log("Them thanh cong");
    } catch (error) {
      console.error("Loi");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createStudent();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="student_name" value={form.student_name} onChange={handleChange}/><br />
        <input type="email" name="email" value={form.email} onChange={handleChange}/><br />
        <input type="text" name="address" value={form.address} onChange={handleChange}/><br />
        <input type="text" name="phone" value={form.phone} onChange={handleChange}/><br />
        <select>
          <option value="true">Hoc</option>
          <option value="false">Nghi</option>
        </select><br />
        <input type="text" name="time" value={form.created_at} onChange={handleChange}/><br />
        <button type="submit">Them</button>
      </form>
    </div>
  );
}