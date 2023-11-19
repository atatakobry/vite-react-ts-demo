import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../../api/pokeApi';
import { TPokemon } from '../../types/pokemon';

const Pokemon = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', 0, 10],
    queryFn: () =>
      getPokemons({
        limit: 0,
        offset: 10,
      }),
  });

  // TODO: 🤔
  const pokemons: TPokemon[] = data?.results || [];

  return (
    <>
      <h1>Pokemon</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !!pokemons && pokemons.map((pokemon) => <div key={pokemon.url}>{pokemon.name}</div>)}
    </>
  );
};

export default Pokemon;
