import { useAppSelector } from 'hooks/reduxHooks';
import { Link, useLocation } from 'react-router-dom';
import { selectCharacters } from 'redux/characters/charactersSelectors';

const Cards: React.FC = () => {
  const location = useLocation();
  const { items, isLoading, error } = useAppSelector(selectCharacters);

  return (
    <ul>
      {items.map((item) => <li key={item.id}><Link state={{ from: location }} to={String(item.id)}>
        <img src={item.image} alt={item.name} />
        {item.name}{item.species}</Link></li>)}
      {isLoading && <p>loading...</p>}
      {error && <p>Oops, error...</p>}
    </ul>
  )
}

export default Cards
