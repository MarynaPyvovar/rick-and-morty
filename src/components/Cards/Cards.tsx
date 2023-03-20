import { useAppSelector } from 'hooks/reduxHooks';
import { Link, useLocation } from 'react-router-dom';
import { selectCharacters } from 'redux/characters/charactersSelectors';

import st from 'components/Cards/Cards.module.scss';
import defaultImage from 'assets/defaultImage.jpg';

const Cards: React.FC = () => {
  const location = useLocation();
  const { items, error } = useAppSelector(selectCharacters);

  const sortedItems = [...items].sort((prev, next) =>  prev.name.localeCompare(next.name))

  return (
    <>{error && <p className={st.error}>{error}</p>}
      <ul className={st.list}>
        {sortedItems.map((item) => <li key={item.id} >
          <Link state={{ from: location }} to={String(item.id)} className={st.card}>
            <img src={item.image ?? defaultImage} alt={item.name} className={st.image} />
            <div className={st.nameWrapper}>
              <h2 className={st.name}>{item.name}</h2>
              <p className={st.specie}>{item.species}</p>
            </div>
          </Link>
        </li>)}
      </ul>
    </>
  )
}

export default Cards
