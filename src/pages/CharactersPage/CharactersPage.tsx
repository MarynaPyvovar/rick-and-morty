import Filter from 'components/Filter/Filter';
import Cards from 'components/Cards/Cards';
import { useEffect } from 'react';

const CharactersPage: React.FC = () => {
  
  useEffect(() => {
    console.log('dispatch an action to fetch all characters from API')
  }, [])

  return (
    <div>
      <Filter />
      <Cards />
    </div>
  )
}

export default CharactersPage
