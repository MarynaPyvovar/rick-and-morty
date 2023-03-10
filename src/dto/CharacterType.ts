export interface CharacterType {
    id: number,
    species: string,
    name: string,
    image: string,
    gender: 'male' | 'female',
    status: string,
    origin: { name: string },
    type: string
}