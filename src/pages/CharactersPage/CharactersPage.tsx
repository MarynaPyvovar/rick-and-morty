import { Logo, Filter, Cards } from "components"
// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
// import { fetchCharacters } from 'redux/characters/charactersOperations';
// import { selectFilter } from 'redux/filter/filterSelectors';


const CharactersPage: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const filter = useAppSelector(selectFilter);
  
  // useEffect(() => {
  //   dispatch(fetchCharacters(filter))
  // }, [dispatch, filter])

  return (
    <div>
      <Logo />
      <Filter />
      <Cards />
    </div>
  )
}

export default CharactersPage
