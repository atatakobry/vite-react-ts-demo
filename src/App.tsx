import { ApolloProvider } from '@apollo/client';
import { aniListApolloClient } from './services/apolloClient';
import Intro from './pages/Intro';
import Anime from './pages/Anime';

const App = () => {
  return (
    <ApolloProvider client={aniListApolloClient}>
      <Intro />
      <Anime />
    </ApolloProvider>
  );
};

export default App;
