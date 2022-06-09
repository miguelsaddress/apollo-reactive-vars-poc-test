# Apollo ReactiveVars TestApp
Starter React App in typescript and Apollo Client to test behavior of Apollo reactive vars

Code Based on Apollo's sample:
https://codesandbox.io/s/queries-example-app-final-nrlnl?file=/src/index.js


# How do they work?

See inside ReactiveDogPhoto

```
  const wrappedReactiveVar = useReactiveVar(reactiveBreed);
  
  const { loading, error, data } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed: wrappedReactiveVar },
      notifyOnNetworkStatusChange: true
    }
  );
```

When the variable (created with `makeVar()`) is wrapped within the `useReactiveVar` hook and used in the query variables, everytime the var `reactiveBreed` changes, the dependent query will be re-triggered


# Running the code

Simply run `pnpm run` or `yarn run` or `npm run`. the browser will be launched and opened into localhost:3000