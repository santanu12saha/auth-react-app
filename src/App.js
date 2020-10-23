import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/hoc/Main';
import LoginForm from './components/form/LoginForm';
import NoMatch from './components/404/NoMatch';
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
        <Main>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Main>
      </Router>
    </ApolloProvider>
  )
};

export default App;
