import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { CharacterDetailsCard, Loader } from 'components';
import { fetchCharacterById } from 'redux/characters/charactersOperations';
import { selectCharacters } from 'redux/characters/charactersSelectors';

import st from 'pages/CharacterDetailsPage/CharacterDetailsPage.module.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CharacterDetailsPage: React.FC = () => {
  const { characterdId } = useParams();
  const { isLoading, error } = useAppSelector(selectCharacters);
  const location = useLocation();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacterById(characterdId))
  }, [dispatch, characterdId])

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink} className={st.back}>
        <AiOutlineArrowLeft className={st.icon} /> Go back
      </Link>
      {isLoading ? <Loader /> : <CharacterDetailsCard />}
      {error && <p>Oops, error... Try again later!</p>}
    </>
  )
}

export default CharacterDetailsPage
