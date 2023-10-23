import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import dealReducer from './slices/dealSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    deal: dealReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
