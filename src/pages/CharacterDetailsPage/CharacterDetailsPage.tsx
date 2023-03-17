import { useEffect, useState, useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CharacterDetailsCard, Loader } from 'components';
import { fetchCharacterByIdFromAPI } from 'api/API';

import st from 'pages/CharacterDetailsPage/CharacterDetailsPage.module.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CharacterType } from "dto/CharacterType";

const CharacterDetailsPage: React.FC = () => {
  const { characterdId } = useParams();
  const location = useLocation();

  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  const getItem = useCallback(async () => {
    const res = await fetchCharacterByIdFromAPI(characterdId);
    setCharacter(res)
  }, [characterdId]) 

  useEffect(() => {
    setIsLoading(true)
    try {
      getItem()
    } catch (error) {
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }, [getItem])

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Link to={backLink} className={st.back}>
        <AiOutlineArrowLeft className={st.icon} /> Go back
      </Link>
      {character && <CharacterDetailsCard character={character} />}
      {isLoading && <Loader />}
      {error && <p>Oops, error... Try again later!</p>}
    </>
  )
}

export default CharacterDetailsPage
