import {createAsyncThunk} from '@reduxjs/toolkit';
import {sleep} from '~/helpers/SleepFunction'; //mock delay function, remove after backend implementation

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const data = require('~/assets/data/MOCK_DATA.json');
  await sleep(1000);
  return data;
});
