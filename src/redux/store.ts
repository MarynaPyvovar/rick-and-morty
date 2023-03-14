import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { charactersSlice } from './characters/charactersSlice';
// import { filterSlice } from './filter/filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['profile'],
};

const reducers = combineReducers({
   auth: persistReducer(authPersistConfig, authSlice.reducer),
    characters: charactersSlice.reducer,
    // filter: filterSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);