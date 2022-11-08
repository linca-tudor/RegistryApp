import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '~/reducers/usersSlice';

const middlewares = [
  //other middlewares
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const storeOptions = {
  reducer: {
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
};

export default configureStore(storeOptions);
