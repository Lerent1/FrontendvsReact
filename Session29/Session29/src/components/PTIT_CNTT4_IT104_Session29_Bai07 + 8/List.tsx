import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function List() {
const [studentList, setStudentList]=useState<any[]>([]);
    async function getData() {
        const res = await axios.get("http://localhost:8080/student");
        setStudentList(res.data);
    }
    useEffect(()=>{
        getData();
    }, []);
    async function deleteStudent(id: number){
        if(confirm("Xoa sinh vien nay")){
            await axios.delete(`http://localhost:8080/student/${id}`);
            getData();
        }
    }
  return (
    <>
        <h1>Quan li sinh vien</h1>
        <table>
            <thead>
                <tr>
                    <th>Ten sinh vien</th>
                    <th>Email</th>
                    <th>Dia chi</th>
                    <th>So dien thoai</th>
                    <th>Lua chon</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentList.map((student, index) =>{
                        return <tr key={index}>
                            <td>{student.student_name}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>{student.phone}</td>
                            <td>
                                <button>sua</button>
                                <button onClick={()=>deleteStudent(student.id)}>xoa</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
  )
}