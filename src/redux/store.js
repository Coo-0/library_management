// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import userReducer from './userSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    auth: authReducer,
  },
});

export default store;
