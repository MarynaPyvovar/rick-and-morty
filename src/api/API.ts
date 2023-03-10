import axios from 'axios';
import { CharacterType } from 'dto/CharacterType';

const BASE_URL = 'https://rickandmortyapi.com/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchCharactersFromAPI(name: string | null): Promise<CharacterType[]> {
  const { data } = await instance.get('/character/', { params: { name } });
  return data.results;
}

export async function fetchCharacterByIdFromAPI(id: string): Promise<CharacterType> {
  const {data} = await instance.get(`/character/${id}`);
  return data;
}
