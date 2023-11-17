import aniList from '../../services/aniList';
import { gql } from '../../gql';

export const GET_ANIMES = gql(`
  query getAnimes ($perPage: Int, $page: Int) {
    Page(perPage: $perPage, page: $page) {
      media {
        id
        coverImage {
          extraLarge
        }
        title {
          english
          native
        }
      }
    }
  }
`);

export type TGetAnimesProps = {
  page: number;
  perPage: number;
};

const getAnimes = async ({ page, perPage }: TGetAnimesProps) => await aniList.request(GET_ANIMES, { page, perPage });

export default getAnimes;
