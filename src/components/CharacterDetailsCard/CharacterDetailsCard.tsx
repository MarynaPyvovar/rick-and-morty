import { CharacterType } from 'dto/CharacterType';
import st from 'components/CharacterDetailsCard/CharacterDetailsCard.module.scss';
import defaultImage from 'assets/defaultImage.jpg';

const CharacterDetailsCard: React.FC<{ character: CharacterType }> = ({ character }) => {
  const { image, name, gender, status, species, origin, type } = character;
  
  return (
    <div className={st.wrapper}>
      <img src={image ?? defaultImage} alt={name} className={st.image} />
        <h1 className={st.title}>{name}</h1>
        <h2 className={st.subtitle}>Information</h2>
        <ul className={st.list}>
          <li className={st.item}><h3>Gender</h3><p>{gender}</p></li>
          <li className={st.item}><h3>Status</h3><p>{status}</p></li>
          <li className={st.item}><h3>Specie</h3><p>{species}</p></li>
          <li className={st.item}><h3>Origin</h3><p>{origin.name}</p></li>
          <li className={st.item}><h3>Type</h3><p>{type.length > 0 ? type : 'Unknown'}</p></li>
        </ul>
      </div>
  )
}

export default CharacterDetailsCard
