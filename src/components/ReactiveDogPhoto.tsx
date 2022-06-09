// @ts-nocheck
import {
    useReactiveVar,
    useQuery,
  } from '@apollo/client';
  import { GET_DOG_PHOTO } from '../actions/queries'
  import { reactiveBreed } from '../data/reactiveVars'
  
export function ReactiveDogPhoto() {
  const wrappedReactiveVar = useReactiveVar(reactiveBreed);
  
  const { loading, error, data } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed: wrappedReactiveVar },
      notifyOnNetworkStatusChange: true
    }
  );

  if (!wrappedReactiveVar) return null
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <div>
      <div>
        <img src={data.dog.displayImage} style={{ height: 200, width: 200 }} alt="" />
      </div>
    </div>
  );
}