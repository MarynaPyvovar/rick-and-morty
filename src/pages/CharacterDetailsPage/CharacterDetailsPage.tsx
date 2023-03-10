import CharacterDetailsCard from 'components/CharacterDetailsCard/CharacterDetailsCard';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchCharacterById } from 'redux/characters/charactersOperations';
import { selectCharacters } from 'redux/characters/charactersSelectors';

const CharacterDetailsPage: React.FC = () => {
  const { characterdId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const dispatch = useAppDispatch();
  const { character } = useAppSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacterById(characterdId))
  }, [dispatch, characterdId])

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      {character && <CharacterDetailsCard character={character} />}
    </div>
  )
}

export default CharacterDetailsPage
