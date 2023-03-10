import type { RootState } from 'redux/store';

export const selectCharacters = (state: RootState) => state.characters;