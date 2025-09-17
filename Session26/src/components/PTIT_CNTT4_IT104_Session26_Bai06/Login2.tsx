import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  password: string;
  role: string;
}

export default function Login() {
  const navigate = useNavigate();

  const userData: User = {
    email: 'phamthanhdat@example.com',
    password: '01052006',
    role: 'Admin'
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (
      email === userData.email &&
      password === userData.password &&
      role === userData.role
    ) {
      navigate('/account');
    } else {
      setError('Thông tin đăng nhập không đúng!');
    }
  };

  return (
    <div>
      <h3>Đăng nhập</h3>
      <input
        type="text"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">-- Chọn quyền --</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select><br />
      <button onClick={handleLogin}>Đăng nhập</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}