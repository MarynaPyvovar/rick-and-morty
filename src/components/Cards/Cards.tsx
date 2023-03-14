import { useAppSelector } from 'hooks/reduxHooks';
import { Link, useLocation } from 'react-router-dom';
import { selectCharacters } from 'redux/characters/charactersSelectors';
import { Loader } from 'components';

const Cards: React.FC = () => {
  const location = useLocation();
  const { items, isLoading, error } = useAppSelector(selectCharacters);

  const sortedItems = [...items].sort((prev, next) =>  prev.name.localeCompare(next.name))

  return (
    <ul>
      {sortedItems.map((item) => <li key={item.id}><Link state={{ from: location }} to={String(item.id)}>
        <img src={item.image} alt={item.name} />
        {item.name}{item.species}</Link></li>)}
      {isLoading && <Loader />}
      {error && <p>Oops, error...</p>}
    </ul>
  )
}

export default Cards
