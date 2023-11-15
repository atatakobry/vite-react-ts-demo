import { useQuery } from '@apollo/client';
import AnimeList from '../../components/AnimeList';
import { GET_ANIME_LIST } from '../../graphql/operations/anime';
import { TAnime } from '../../types/anime';

const Anime = () => {
  const { loading, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: 1,
      perPage: 10,
    },
  });

  // TODO: 🤔
  const animes: TAnime[] = (data?.Page?.media || []) as TAnime[];

  return (
    <>
      <h1>Anime</h1>
      {loading && <div>Loading...</div>}
      {!loading && !!animes && <AnimeList animes={animes} />}
    </>
  );
};

export default Anime;
