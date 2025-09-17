import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Bai4() {
    const [studentName, setStudentName] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudentName(e.target.value);
    }
    const [name, setSearchParamName] = useSearchParams();

    const handleClick = () => {
        setSearchParamName({
            name: studentName,
        })
    }
  return (
    <div>
      <input type="text" placeholder='Nhap ten hoc sinh' onChange={handleChange}/>
      <button onClick={handleClick}>Tim kiem</button>
      <p>Gia tri vua tim kiem: {name.get("name")}</p>
    </div>
  )
}