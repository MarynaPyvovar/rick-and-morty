import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacters, fetchCharacterById } from 'redux/characters/charactersOperations';
import { CharacterType } from 'dto/CharacterType';

interface CharactersState {
    items: CharacterType[],
    character: CharacterType | null,
    isLoading: boolean,
    error: null | string,
    pages: string | null
}

const initialState: CharactersState = {
    items: [],
    character: null,
    isLoading: false,
    error: null,
    pages: null
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
    extraReducers: builder => {
    builder
    .addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = null;
        if (action.payload) {
          state.items = action.payload.results;
          state.pages = String(action.payload.info.pages);
        }
    })
    .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
        if (action.payload.endsWith('404')) {
          state.error = 'Oops... We don`t have this character, try another name!';
        }
          state.items = [];
        }
    })
    .addCase(fetchCharacterById.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCharacterById.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = null;
        if (action.payload) {
            state.character = action.payload;
        }
    })
    .addCase(fetchCharacterById.rejected, (state, action) => {
      state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
          state.character = null;
        }
    })
  }
})
