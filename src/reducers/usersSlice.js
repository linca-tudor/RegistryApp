import {createSlice} from '@reduxjs/toolkit';
import {getFeed, getUserById} from '~/middlewares/users';

const sliceOptions = {
  name: 'users',
  initialState: {
    feed: [],
    search: [],
    profiles: {},
    isFeedLoading: false,
    hasFeedError: '',
    searchLoading: false,
    hasLoadingError: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFeed.pending, (state, action) => {
        state.isFeedLoading = true;
        state.hasFeedError = '';
      })
      .addCase(getFeed.fulfilled, (state, action) => {
        state.feed = action.payload;
        state.isFeedLoading = false;
        state.hasFeedError = '';
      })
      .addCase(getFeed.rejected, (state, action) => {
        state.isFeedLoading = false;
        state.hasFeedError = action.payload;
      })
      .addCase(getUserById.pending, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.meta.arg]: {
            isLoading: 'true',
            error: '',
          },
        };
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.payload.id]: {
            ...action.payload,
            isLoading: 'false',
            error: '',
          },
        };
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.profiles = {
          ...state.profiles,
          [action.meta.arg]: {
            isLoading: 'false',
            error: action.payload,
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

export default usersSlice.reducer;
