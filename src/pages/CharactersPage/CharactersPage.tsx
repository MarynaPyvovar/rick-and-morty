import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Logo, Filter, Cards, Pagination } from "components";
import { useAppDispatch } from "hooks/reduxHooks";
import { fetchCharacters } from 'redux/characters/charactersOperations';

const CharactersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('name');
  const queryPage = searchParams.get('page');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Number(queryPage) < 1) {
      setSearchParams({ name: queryName || '', page: '1' });
      return
    }
  }, [])

  useEffect(() => {
    dispatch(fetchCharacters({ name: queryName, page: queryPage })) 
  }, [queryName, queryPage, dispatch]) 

  return (
    <>
      <Logo />
      <Filter/>
      <Cards />
      <Pagination />
    </>
  )
}

export default CharactersPage;
