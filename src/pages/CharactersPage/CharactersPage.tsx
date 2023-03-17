import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Logo, Filter, Cards, Pagination } from "components";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { fetchCharacters } from 'redux/characters/charactersOperations';
import { selectCharacters } from "redux/characters/charactersSelectors";

const CharactersPage: React.FC = () => {
  const { pages } = useAppSelector(selectCharacters);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('name');
  const queryPage = searchParams.get('page');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Number(queryPage) < 1 || Number(queryPage) > Number(pages)) {
      setSearchParams({ name: queryName || '', page: '1' });
      dispatch(fetchCharacters({ name: queryName, page: '1' }))
      return
    }

    dispatch(fetchCharacters({ name: queryName, page: queryPage })) 
  }, [queryName, queryPage, dispatch, setSearchParams, pages]) 

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
