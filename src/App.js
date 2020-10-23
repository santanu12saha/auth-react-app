import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main/Main';
import './App.css';


const options = {
  dataIdFromObject: o => o.id
};

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
  cache: new InMemoryCache(options),
  link
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" exact component={Main} />
      </Router>
    </ApolloProvider>
  )
};

export default App;
