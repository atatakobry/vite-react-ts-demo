import { useQuery } from '@tanstack/react-query';
import { getAnimeList } from '../../api/aniList';
import AnimeList from '../../components/AnimeList';
import { TAnime } from '../../types/anime';

const Anime = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['anime', 1, 10],
    queryFn: async () =>
      getAnimeList({
        page: 1,
        perPage: 10,
      }),
  });

  // TODO: 🤔
  const animes: TAnime[] = (data?.Page?.media || []) as TAnime[];

  return (
    <>
      <h1>Anime</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!animes && <AnimeList animes={animes} />}
    </>
  );
};

export default Anime;
