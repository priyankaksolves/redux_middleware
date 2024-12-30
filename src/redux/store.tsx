// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';  // Import the reducer

const store = configureStore({
  reducer: {
    books: bookReducer,  // Add books reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
