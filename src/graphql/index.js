import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_APP_GRAPHQL_URL;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : new HttpLink({
    uri,
  }),
});

export default client;
