import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './redux/features/auth/authSlice'; // Adjust the import path

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch action to remove token from Redux
    localStorage.removeItem('token'); // Remove token from local storage
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
