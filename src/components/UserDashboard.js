// src/components/UserDashboard.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userSlice'; // Adjust the import path

const UserDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users); // Assuming your slice name is 'users'

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users from the API
  }, [dispatch]);

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) - Assigned Books: {user.books.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
