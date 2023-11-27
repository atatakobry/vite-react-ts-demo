import { TPokemon } from '../../types/pokemon';
import useGetPokemons from './useGetPokemons';

const Pokemon = () => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } = useGetPokemons({
    offset: 0,
    limit: 25,
  });

  // TODO: 🤔
  const pokemons: TPokemon[] = data || [];

  return (
    <>
      <h1>Pokemon</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!pokemons && (
        <>
          {pokemons.map((pokemon, index) => (
            <div key={pokemon.url}>
              {index + 1}. {pokemon.name}
            </div>
          ))}
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

export default Pokemon;
