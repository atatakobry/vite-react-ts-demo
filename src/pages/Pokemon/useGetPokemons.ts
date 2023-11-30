import { useInfiniteQuery } from '@tanstack/react-query';

import { getPokemons, TGetPokemonsProps } from '../../api/pokeApi';

const useGetPokemons = ({ limit, offset }: TGetPokemonsProps) =>
  useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: ({ pageParam }) => getPokemons({ offset: pageParam || offset, limit }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        return Number(new URL(lastPage.next).searchParams.get('offset'));
      }

      return null;
    },
    select: (data) => data.pages.map((page) => page.results).flat(),
  });

export default useGetPokemons;
