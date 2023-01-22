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
    const response = await axios.get('/users', config);
    return response.data;
  },
);

export const getUserById = createAsyncThunk(
  'users/getProfile',
  async (id, thunkAPI) => {
    const searchedUser = (await axios.get('/users', config)).data.find(
      item => item.id === id,
    );

    if (searchedUser === undefined) {
      throw 'Thunk did not find any matching profile with the one requested';
    } else {
      return searchedUser;
    }
  },
);

export const addUser = createAsyncThunk(
  'users/addProfile',
  async (profile, thunkAPI) => {
    const addedUser = await axios.post('/users', profile, config);
    return addedUser;
  },
);
