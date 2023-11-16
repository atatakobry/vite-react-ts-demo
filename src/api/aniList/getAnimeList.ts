import aniListApi from '../../services/aniListApi';
import { GET_ANIME_LIST } from '../../graphql/operations/anime';

export type TGetAnimeListProps = {
  perPage: number;
  page: number;
};

const getAnimeList = async ({ perPage, page }: TGetAnimeListProps) =>
  await aniListApi.request(GET_ANIME_LIST, { perPage, page });

export default getAnimeList;
