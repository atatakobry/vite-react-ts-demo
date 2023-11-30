import AnimeList from '../../components/AnimeList';
import { TAnime } from '../../types/anime';
import useGetAnimes from './useGetAnimes';

const Anime = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useGetAnimes({
    page: 1,
    perPage: 25,
    seasonYear: 2023,
    season: 'FALL',
  });

  // TODO: 🤔
  const animes: TAnime[] = (data || []) as TAnime[];

  return (
    <>
      <h1>Anime</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!animes && (
        <>
          <AnimeList animes={animes} />
          {hasNextPage && (
            <button type="button" disabled={isFetching} onClick={() => fetchNextPage()}>
              Load more
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Anime;
