import { 
  makeVar,
  ReactiveVar
 } from "@apollo/client";

 type Breed = string
 type BreedList = string[]
 
 export const breedList: ReactiveVar<BreedList> = makeVar<BreedList>([])

 export const addBreed = (b: Breed) => breedList([...breedList(), b])

 export const getRandomBreedFromHistory = () => {
   const idx = Math.random() * 100
   const last = breedList().length - 1
   return (idx > breedList().length)
    ? breedList()[last]
    : breedList()[idx]
 }


 export const reactiveBreed: ReactiveVar<Breed> = makeVar<Breed>('')
 export const updateReactiveBreedVar = (value: string) => {
  console.log('inside update....', value)
  reactiveBreed(value)
}
