import { CharacterType } from 'dto/CharacterType';


const CharacterDetailsCard: React.FC<{ character: CharacterType }> = ({ character }) => {
  const { image, name, gender, status, species, origin, type } = character;
  
  return (
    <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>Information</h2>
        <ul>
          <li><h3>Gender</h3><p>{gender}</p></li>
          <li><h3>Status</h3><p>{status}</p></li>
          <li><h3>Specie</h3><p>{species}</p></li>
          <li><h3>Origin</h3><p>{origin.name}</p></li>
          <li><h3>Type</h3><p>{type.length > 0 ? type : 'Unknown'}</p></li>
        </ul>
      </div>
  )
}

export default CharacterDetailsCard
