import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import type { Student } from "../utils/types";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  onUpdate: (student: Student) => void;
  toggle: string;
  isClose: (key: string) => void;
  editingStudent?: Student | null;
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, toggle, onUpdate, isClose, editingStudent }) => {
  const [student, setStudent] = useState<Student>({
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleClose = () => {
    isClose("OFF");
    setStudent({
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
  };

  const handleSubmit = () => {
    if (!student.id || !student.name) return;
    if (editingStudent) {
      onUpdate(student);
    } else {
      onSubmit(student);
    }
    handleClose();
  };

  return (
    <>
      {toggle === "ON" ? (
        <div className="w-1/3 p-4 border rounded-xl shadow">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="font-semibold mb-4">
              {editingStudent ? "Cập nhật sinh viên" : "Thêm mới sinh viên"}
            </h2>
            <div onClick={handleClose} style={{ cursor: "pointer" }}>
              X
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TextField
              label="Mã sinh viên"
              name="id"
              value={student.id}
              onChange={handleChange}
              fullWidth
              disabled={!!editingStudent}
            />
            <TextField
              label="Tên sinh viên"
              name="name"
              value={student.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Tuổi"
              name="age"
              type="number"
              value={student.age}
              onChange={handleChange}
              fullWidth
            />
            <Select
              name="gender"
              value={student.gender}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Nam">Nam</MenuItem>
              <MenuItem value="Nữ">Nữ</MenuItem>
            </Select>
            <TextField
              type="date"
              label="Ngày sinh"
              name="birthday"
              value={student.birthday}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Nơi sinh"
              name="hometown"
              value={student.hometown}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Địa chỉ"
              name="address"
              value={student.address}
              onChange={handleChange}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {editingStudent ? "Cập nhật" : "Thêm mới"}
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default StudentForm;