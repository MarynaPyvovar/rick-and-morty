import React from 'react'

interface CharacterType {
    id: number,
    species: string,
    name: string,
    image: string,
    gender: 'male' | 'female',
    status: string,
    origin: { name: string },
    type: string
}

const CharacterDetailsCard: React.FC<{character: CharacterType}> = ({character}) => {
  return (
    <div>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <h2>Information</h2>
        <ul>
          <li><h3>Gender</h3><p>{character.gender}</p></li>
          <li><h3>Status</h3><p>{character.status}</p></li>
          <li><h3>Specie</h3><p>{character.species}</p></li>
          <li><h3>Origin</h3><p>{character.origin.name}</p></li>
          <li><h3>Type</h3><p>{character.type.length > 0 ? character.type : 'Unknown'}</p></li>
        </ul>
      </div>
  )
}

export default CharacterDetailsCard
