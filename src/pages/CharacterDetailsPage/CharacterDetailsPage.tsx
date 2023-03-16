import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { fetchCharacterById } from 'redux/characters/charactersOperations';
import { selectCharacters } from 'redux/characters/charactersSelectors';
import { CharacterDetailsCard } from 'components';
import st from 'pages/CharacterDetailsPage/CharacterDetailsPage.module.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CharacterDetailsPage: React.FC = () => {
  const { characterdId } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { character } = useAppSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacterById(characterdId))
  }, [dispatch, characterdId])

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink} className={st.back}>
        <AiOutlineArrowLeft className={st.icon} /> Go back
      </Link>
      {character && <CharacterDetailsCard character={character} />}
    </>
  )
}

export default CharacterDetailsPage
