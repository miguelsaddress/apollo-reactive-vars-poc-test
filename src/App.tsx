// @ts-nocheck
import './App.css';
import { useState } from "react"
import { DogPhoto, Dogs } from './Dogs'
import { 
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
 } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache()
});


function App() {
  const [selectedDog, setSelectedDog] = useState(null);

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h2>Testing out Reactive Vars in Apollo 🚀</h2>
          {selectedDog && <DogPhoto breed={selectedDog} />}
          <Dogs onDogSelected={onDogSelected} />
        </header>
      </div>
    </ApolloProvider>

  );
}

export default App;
