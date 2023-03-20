import { useAppSelector } from 'hooks/reduxHooks';
import { selectCharacters } from 'redux/characters/charactersSelectors';

import st from 'components/CharacterDetailsCard/CharacterDetailsCard.module.scss';
import defaultImage from 'assets/defaultImage.jpg';

const CharacterDetailsCard: React.FC = () => {
  const { character } = useAppSelector(selectCharacters);
  
  const characterType = character && character.type.length > 0 ? character.type : 'Unknown';
  
  return (
    <div className={st.wrapper}>
      <img src={character?.image ?? defaultImage} alt={character?.name} className={st.image} />
        <h1 className={st.title}>{character?.name}</h1>
        <h2 className={st.subtitle}>Information</h2>
        <ul className={st.list}>
          <li className={st.item}><h3>Gender</h3><p>{character?.gender}</p></li>
          <li className={st.item}><h3>Status</h3><p>{character?.status}</p></li>
          <li className={st.item}><h3>Specie</h3><p>{character?.species}</p></li>
          <li className={st.item}><h3>Origin</h3><p>{character?.origin.name}</p></li>
          <li className={st.item}><h3>Type</h3><p>{characterType}</p></li>
        </ul>
    </div>
  )
}

export default CharacterDetailsCard
