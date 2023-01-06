import {createAsyncThunk} from '@reduxjs/toolkit';
import {sleep} from '~/helpers/SleepFunction'; //mock delay function, remove after backend implementation

export const getFeed = createAsyncThunk(
  'users/getFeed',
  async (_, thunkAPI) => {
    const data = require('~/assets/data/MOCK_DATA.json');
    await sleep(1000);
    return data;
  },
);

export const getUserById = createAsyncThunk(
  'users/getProfiles',
  async (id, thunkAPI) => {
    const data = require('~/assets/data/MOCK_DATA.json');
    await sleep(1000);
    const searchedUser = data.find(item => item.id === id);

    if (searchedUser === undefined) {
      throw 'Thunk did not find any matching';
    } else {
      return searchedUser;
    }
  },
);
