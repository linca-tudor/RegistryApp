import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from '~/actions/loadUsers';

const sliceOptions = {
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addMatcher(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addDefaultCase((state, action) => {
        console.warn('usersSlice reducer Default Case!');
      });
  },
};

export const usersSlice = createSlice(sliceOptions);

export const selectAllUsers = state => state.users.users;

export default usersSlice.reducer;
