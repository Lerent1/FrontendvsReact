import type { Student } from '../utils/types';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StudentManagement = () => {
  const [toggle, setToggle] = useState<string>("");
  const student = useSelector((store: any) => store.student);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>("");
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);


  const handleAddStudent = (student: Student) => {
    dispatch({ type: "ADD", payload: student });
  };

  const handleUpdateStudent = (student: Student) => {
    dispatch({ type: "UPDATE", payload: student });
  };

  const handleDeleteStudent = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleSearch = (key: string) => {
    setKeyword(key);
  };

  const isShow = (flag: string) => {
    setToggle(flag);
  }

  const isClose = (close: string) => {
    setToggle(close);
  }

  const searchStudents = student.filter((s: Student) =>
    s.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar isShow = {isShow} onSearch={handleSearch} />
        <StudentList students={keyword ? searchStudents : student} onDelete={handleDeleteStudent} onUpdate={(s: Student) => {
          setEditingStudent(s);
          setToggle("ON");
        }}/>
      </div>
      <StudentForm toggle={toggle} editingStudent={editingStudent} isClose={isClose} onSubmit={handleAddStudent} onUpdate={handleUpdateStudent}/>
    </div>
  );
};

export default StudentManagement