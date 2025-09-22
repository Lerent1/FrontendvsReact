import React from 'react'
import ListCourse from './component/PTIT_CNTT4_IT104_Session12_Bai01/ListCourse';
import Calculation from './component/PTIT_CNTT4_IT104_Session12_Bai02/Calculation';
import UserInfo from './component/PTIT_CNTT4_IT104_Session12_Bai03/UserInfo';
import ColorBox from './component/PTIT_CNTT4_IT104_Session12_Bai04/ColorBox';
import FormatName from './component/PTIT_CNTT4_IT104_Session12_Bai05/FormatName';
import AdminIndex from './component/PTIT_CNTT4_IT104_Session12_Bai06/AdminIndex';
import UserLayout from './component/PTIT_CNTT4_IT104_Session12_Bai07/UserLayout';
import ListAcc from './component/PTIT_CNTT4_IT104_Session12_Bai08/ListAcc';

export default function App() {
  // let fullName: string = "Nguyen Tuan Minh";
  // let age: number = 19;
  // let isActive: boolean = true;
  // let student: string[] = ["Thang", "Loc"];
  // let newStudent = {
  //   name: "Thang",
  //   age: 19,
  //   address: "lol"
  // }
  // let courses: string[] = ["Python", "C++"];
  // let score = [
  //   {
  //     name: "Thang",
  //     math: 1
  //   },
  //   {
  //     name: "Loc",
  //     math: 1.2
  //   },
  //   {
  //     name: "Minh",
  //     math: 10
  //   }
  // ]

  return (
    <p>
      <div>
      {/* Hoc react
      <p>Ho ten: {fullName}, tuoi: {age}</p>
      <p>Danh sach sinh vien: {student.join(", ")}</p>
      <p>Thong tin sinh vien: {JSON.stringify(newStudent)}</p>
      <p>Mon hoc: {courses.join(", ")}</p>
      {/* <ul>
        <p>Diem so: </p>
        {courses.map((item, index) => {
            return <li>key = {index}  {item}</li>
          })}
      </ul> */}
    </div>
    <ListCourse></ListCourse>
    <Calculation></Calculation>
    <UserInfo></UserInfo>
    <ColorBox></ColorBox>
    <FormatName></FormatName>
    <AdminIndex></AdminIndex>
    <UserLayout></UserLayout>
    <ListAcc></ListAcc>
    </p>
  )
}
