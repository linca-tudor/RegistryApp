import {createAsyncThunk} from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const data = require('~/assets/data/MOCK_DATA.json');
  return data;
});
