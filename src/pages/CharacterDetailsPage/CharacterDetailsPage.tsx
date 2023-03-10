import { useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const CharacterDetailsPage: React.FC = () => {
  const { characterdId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    console.log('dispatch an action to fetch character detail from API', characterdId)
  }, [characterdId])

  return (
    <div>
      <Link to={backLink}>Go back</Link>
    </div>
  )
}

export default CharacterDetailsPage
