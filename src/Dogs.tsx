// @ts-nocheck
import React, { useState } from "react";
import { render } from "react-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  ReactiveVar,
  makeVar,
  gql
} from "@apollo/client";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export function Dogs({ onDogSelected }) {
  const myVar = makeVar([]);

  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <button onClick={() => console.log(myVar([2]))}>
        toggle Reactive var!: {JSON.stringify(myVar)}
      </button>
      <p></p>
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    </>
  );
}

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

export function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true
      // pollInterval: 500
    }
  );

  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <div>
      <div>
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
      </div>
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}