import { createSlice } from '@reduxjs/toolkit';
import { loginGoogle, logoutGoogle } from './authOperations';
import { ProfileType } from 'dto/ProfileType';

interface ProfileState {
    user: string | null,
    profile: ProfileType | null,
    isLoading: boolean,
    error: null | string
}

const initialState: ProfileState = {
    user: null,
    profile: null,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
  name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log('payload in setUser in slice', action.payload.access_token)
            state.user = action.payload.access_token
        }
    },
    extraReducers: builder => {
    builder
    .addCase(loginGoogle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(loginGoogle.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = null;
        if (action.payload) {
            state.profile = action.payload;
        }
    })
    .addCase(loginGoogle.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
            state.error = action.payload;
        }
    })
    
    .addCase(logoutGoogle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logoutGoogle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.profile = null;
    })
    .addCase(logoutGoogle.rejected, (state, action) => {
      state.isLoading = false;
        if (typeof action.payload === 'string') {
            state.error = action.payload;
        }
    })
  }
})