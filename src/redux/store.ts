import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from './characters/charactersSlice';
import { filterSlice } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    filter: filterSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;