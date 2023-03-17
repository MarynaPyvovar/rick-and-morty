import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharactersFromAPI, fetchCharacterByIdFromAPI } from 'api/API';
import { QueryType } from 'dto/QueryType';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async ({name, page}: QueryType, { rejectWithValue }) => {
    try {
        const data = await fetchCharactersFromAPI({name, page});
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

export const fetchCharacterById = createAsyncThunk(
  'characters/fetchById',
  async (id: string | undefined, { rejectWithValue }) => {
      try {
        if (typeof id === 'undefined') {
          throw new Error('Id is underfined')
        }
        const data = await fetchCharacterByIdFromAPI(id);
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