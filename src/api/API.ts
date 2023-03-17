import axios from 'axios';
import { CharacterType } from 'dto/CharacterType';
import { QueryType } from 'dto/QueryType';

const BASE_URL = 'https://rickandmortyapi.com/api';
const GOOGLE_AUTH_URL = 'https://www.googleapis.com/oauth2/v1/userinfo';

const instance = axios.create({
  baseURL: BASE_URL,
});

interface Info {
  info: {pages: number},
  results: CharacterType[]
}

export async function fetchCharactersFromAPI({name, page}: QueryType): Promise<Info> {
  const { data } = await instance.get('/character/', { params: { name, page } });
  return data;
}

export async function fetchCharacterByIdFromAPI(id: string | undefined): Promise<CharacterType> {
  const {data} = await instance.get(`/character/${id}`);
  return data;
}

export async function loginWithGoogle(access_token: string) {
  const { data } = await axios.get(`${GOOGLE_AUTH_URL}?access_token=${access_token}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json'
      }
    })
  return data;
}
