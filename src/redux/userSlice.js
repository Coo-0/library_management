import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Set the initial state for the user slice
const initialState = {
  name: '',
  email: '',
  // Add more user-related properties here
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      // Set more user-related properties here
    },
    clearUser: (state) => {
      // Clear user-related properties when logging out
      state.name = '';
      state.email = '';
    },
  },
});

// Export actions from the user slice
export const { setUser, clearUser } = userSlice.actions;

// Create an async thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('/api/users/'); // Adjust the API endpoint
  const data = await response.json();
  return data;
});

// Create the users slice
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer from the users slice
export const usersReducer = usersSlice.reducer;

// Export the entire users slice
export default { user: userSlice.reducer, users: usersReducer };
