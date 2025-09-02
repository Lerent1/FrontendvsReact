import React, { useState } from 'react'

export default function CheckSize() {
  const [text, setText] = useState('');
  const [mess, setMess] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    if (value.length > 5) {
      setMess('Chuoi nhap dai hon 5 ky tu');
    } else {
      setMess('');
    }
  }

  return (
    <div>
      <h2>Kiem tra do dai chuoi nhap</h2>
      <input type="text" value={text} onChange={handleChange}/>
      <p>{mess}</p>
    </div>
  )
}