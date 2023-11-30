import pokeApi from '../../services/pokeApi';
import { TPokemon } from '../../types/pokemon';

export type TGetPokemonsProps = {
  limit: number;
  offset: number;
};

export type TGetPokemonsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPokemon[];
};

const getPokemons: (props: TGetPokemonsProps) => Promise<TGetPokemonsResponse> = async ({ limit, offset }) => {
  const response = await pokeApi.get('/pokemon', { params: { offset, limit } });

  return response.data;
};

export default getPokemons;
