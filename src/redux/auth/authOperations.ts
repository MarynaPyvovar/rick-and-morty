import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithGoogle } from 'api/API';
import { authSlice } from './authSlice';
import { googleLogout} from '@react-oauth/google';

export const { setUser } = authSlice.actions;

export const loginGoogle = createAsyncThunk(
  'auth/login',
  async (token: string, { rejectWithValue }) => {
    try {
        const data = await loginWithGoogle(token);
      return data;
    } catch (error) {
      let message: string;
        if (error instanceof Error) {
          message = error.message;
          return rejectWithValue(message);
        }
    }
  }
)

export const logoutGoogle = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
        googleLogout();
    } catch (error) {
      let message: string;
        if (error instanceof Error) {
          message = error.message;
          return rejectWithValue(message);
        }
    }
  }
)