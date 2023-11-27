import { getAnimes, TGetAnimesProps } from '../../api/aniList';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGetAnimes = ({ page, perPage, seasonYear, season }: TGetAnimesProps) =>
  useInfiniteQuery({
    queryKey: ['anime', page, perPage, seasonYear, season],
    queryFn: ({ pageParam }) => getAnimes({ page: pageParam || page, perPage, seasonYear, season }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage?.Page?.pageInfo?.hasNextPage && lastPage?.Page?.pageInfo?.currentPage) {
        return lastPage?.Page?.pageInfo?.currentPage + 1;
      }

      return null;
    },
    select: (data) => data.pages.map((page) => page.Page?.media).flat(),
  });

export default useGetAnimes;
