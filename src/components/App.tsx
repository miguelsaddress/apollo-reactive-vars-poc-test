// @ts-nocheck
import './App.css';
import { 
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
 } from "@apollo/client";

 import { updateReactiveBreedVar } from '../data/reactiveVars'
 import { DogList } from './DogList'
 import { ReactiveDogPhoto } from './ReactiveDogPhoto' 

const client = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h2>Testing out Reactive Vars in Apollo 🚀</h2>
          <DogList onDogSelected={({ target: { value } }) => updateReactiveBreedVar(value)} />
          <ReactiveDogPhoto/>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
