import {createSlice} from '@reduxjs/toolkit';
import {addUser, getFeed, getUserById} from '~/middlewares/users';

const sliceOptions = {
  name: 'users',
  initialState: {
    feed: [],
    search: [],
    profiles: {},
    isFeedPending: false,
    hasFeedError: '',
    isSearchPending: false,
    hasSearcgError: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFeed.pending, (state, action) => {
        state.isFeedPending = true;
        state.hasFeedError = '';
      })
      .addCase(getFeed.fulfilled, (state, action) => {
        state.feed = action.payload;
        state.isFeedPending = false;
        state.hasFeedError = '';
      })
      .addCase(getFeed.rejected, (state, action) => {
        state.isFeedPending = false;
        state.hasFeedError = action.error;
      })
      .addCase(getUserById.pending, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.meta.arg]: {
            isPending: true,
            error: '',
          },
        };
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.payload.id]: {
            ...action.payload,
            isPending: false,
            error: '',
          },
        };
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.meta.arg]: {
            isPending: false,
            error: action.error,
          },
        };
      })
      .addCase(addUser.pending, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.meta.arg.id]: {
            isPending: true,
            error: '',
          },
        };
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.payload.data.data.id]: {
            ...action.payload.data.data,
            isPending: false,
            error: '',
          },
        };
      })
      .addCase(addUser.rejected, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.meta.arg.id]: {
            isPending: false,
            error: action.error,
          },
        };
      });
  },
};

export const usersSlice = createSlice(sliceOptions);

export const selectAllUsers = state => state.users.feed;

export const selectUserById = (state, id) => {
  return state.users.profiles[id];
};

export const selectNewUser = (state, profile) => {
  return state.users.profiles[profile.id];
};

export default usersSlice.reducer;
