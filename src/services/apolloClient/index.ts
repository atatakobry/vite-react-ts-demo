import { ApolloClient, InMemoryCache } from '@apollo/client';

export const aniListApolloClient = new ApolloClient({
  uri: 'https://graphql.anilist.co/',
  cache: new InMemoryCache(),
});
