import React, { useState } from 'react'

export default function InputValidate() {
  const [data, setData] = useState({ name: '', email: '' });
  const [error, setError] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value === '') {
      setError({ ...error, [name]: `${name} ko duoc bo trong` });
    } else {
      setError({ ...error, [name]: '' });
    }
    if (name === 'email') {
      if (!value.includes('@') || value.indexOf('@') === 0) {
        setError({ ...error, [name]: 'Email ko dung dinh dang' });
      } else {
        setError({ ...error, [name]: '' });
      }
    }
  };
  const isFormValid = data.name && data.email && !error.name && !error.email;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Gui thanh cong');
    }
  };

  console.log("data", data);
  console.log("error", error);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Ho va ten" name="name" value={data.name} onChange={handleChange} />
        <p style={{ color: 'red' }}>{error.name}</p>
      </div>
      <div>
        <input type="text" placeholder="Email" name="email" value={data.email} onChange={handleChange} />
        <p style={{ color: 'red' }}>{error.email}</p>
      </div>
      <button type="submit" disabled={!isFormValid}>Gui</button>
    </form>
  )
}