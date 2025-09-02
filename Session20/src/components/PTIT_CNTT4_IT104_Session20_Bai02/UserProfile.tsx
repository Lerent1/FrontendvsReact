import React, { useState } from 'react'

export default function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if(name === "name") {
        setName(value);
    } else if(name === "email") {
        setEmail(value);
    }
  }
  const handleSubmit = () => {
    if (name.trim() === '' || email.trim() === '') {
      alert('Hay nhap day du thong tin');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Thong tin nguoi dung</h1>
      <input type="text" placeholder='Nhap ten' name='name' value={name} onChange={handleChange}/><br />
      <input type="text" placeholder='Nhap eamil' name='email' value={email} onChange={handleChange}/><br />
      <button onClick={handleSubmit}>Gui</button>

      {submitted && (
        <div>
          <p><strong>Ten:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </div>
  )
}
