import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {DATABASE_URL, API_KEY} from '@env';

const config = {
  // baseURL: DATABASE_URL,
  baseURL: '',
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
    const searchedUser = await axios.get(`/users/${id}`, config);

    if (searchedUser.status !== 200) {
      throw 'Thunk did not find any matching profile with the one requested';
    } else {
      return searchedUser.data;
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

export const editUser = createAsyncThunk(
  'users/editProfile',
  async (profile, thunkAPI) => {
    const addedUser = await axios.put(`/users/${profile.id}`, profile, config);
    return addedUser;
  },
);

// export const getFeed = createAsyncThunk(
//   'users/getFeed',
//   async (_, thunkAPI) => {
//     console.warn('getFeed() Middleware');
//     return null;
//   },
// );

// export const getUserById = createAsyncThunk(
//   'users/getProfile',
//   async (id, thunkAPI) => {
//     console.warn('geUserById() Middleware');
//     return null;
//   },
// );

// export const addUser = createAsyncThunk(
//   'users/addProfile',
//   async (profile, thunkAPI) => {
//     console.warn('addUser() Middleware');
//     return null;
//   },
// );

// export const editUser = createAsyncThunk(
//   'users/editProfile',
//   async (profile, thunkAPI) => {
//     console.warn('getFeed`() Middleware');
//     return null;
//   },
// );
