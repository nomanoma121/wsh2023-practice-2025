import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  queryDeduplication: false,
  uri: '/graphql',
});
