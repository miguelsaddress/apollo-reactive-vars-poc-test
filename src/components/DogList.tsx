// @ts-nocheck
import { useQuery, } from '@apollo/client';
import { GET_DOGS } from '../actions/queries'

export function DogList({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const dogOptions = [
    { id: null, breed: null },
    ...data.dogs
  ]
  return (
    <div id="DogList">
      <select name="dog" onChange={onDogSelected}>
        {dogOptions.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    </div>
  )
}
