import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {DATABASE_URL, API_KEY} from '@env';

const config = {
  baseURL: DATABASE_URL,
  headers: {'X-api-key': API_KEY},
};

export const getFeed = createAsyncThunk(
  'users/getFeed',
  async (_, thunkAPI) => {
    return (await axios.get('/users', config)).data;
  },
);

export const getUserById = createAsyncThunk(
  'users/getProfiles',
  async (id, thunkAPI) => {
    const searchedUser = (await axios.get('/users', config)).data.find(
      item => item.id === id,
    );

    if (searchedUser === undefined) {
      throw 'Thunk did not find any matching';
    } else {
      return searchedUser;
    }
  },
);
