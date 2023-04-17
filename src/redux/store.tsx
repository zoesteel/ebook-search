import { configureStore } from '@reduxjs/toolkit';
import bookResultReducer from './reducers/bookResultReducer';

export const store = configureStore({
  reducer: {
    payload: bookResultReducer,
  }
});
