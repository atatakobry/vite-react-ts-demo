import aniList from '../../services/aniList';
import { gql } from '../../gql';

export const GET_ANIMES = gql(`
query GetAnimes ($page: Int $perPage: Int $seasonYear: Int $season: MediaSeason) {
  Page(page: $page perPage: $perPage) {
    media(seasonYear: $seasonYear season: $season isAdult: false) {
      id
      coverImage {
        extraLarge
      }
      title {
        english
        native
        romaji
      }
    }
    pageInfo {
      currentPage
      hasNextPage
      lastPage
      perPage
      total
    }
  }
}
`);

export type TGetAnimesProps = {
  page: number;
  perPage: number;
  seasonYear: number;
  season: 'FALL' | 'SPRING' | 'SUMMER' | 'WINTER';
};

const getAnimes = async ({ page, perPage, seasonYear, season }: TGetAnimesProps) =>
  await aniList.request(GET_ANIMES, { page, perPage, seasonYear, season });

export default getAnimes;
