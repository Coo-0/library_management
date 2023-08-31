import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/features/auth/authSlice'; // Adjust the import path
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/token/', { username, password });
      const token = response.data.access;
      dispatch(loginSuccess(token)); // Dispatch action to store token in Redux
      localStorage.setItem('token', token); // Store token in local storage
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
