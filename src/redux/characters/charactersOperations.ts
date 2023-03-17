import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharactersFromAPI, fetchCharacterByIdFromAPI } from 'api/API';

// export const fetchCharacters = createAsyncThunk(
//   'characters/fetchAll',
//   async (name: string | null, { rejectWithValue }) => {
//     try {
//         const data = await fetchCharactersFromAPI(name);
//       return data;
//     } catch (error) {
//       let message: string;
//         if (error instanceof Error) {
//           message = error.message;
//           console.log(error)
//           return rejectWithValue(message);
//         }
//     }
//   }
// )

// export const fetchCharacterById = createAsyncThunk(
//   'characters/fetchById',
//   async (id: string | undefined, { rejectWithValue }) => {
//       try {
//         if (typeof id === 'undefined') {
//           throw new Error('Id is underfined')
//         }
//         const data = await fetchCharacterByIdFromAPI(id);
//       return data;
//       } catch (error) {
//         // TODO: recheck
//         let message: string;
//         if (error instanceof Error) {
//           message = error.message;
//           console.log(typeof error.message)
//           return rejectWithValue(message);
//         }
//     }
//   }
// )