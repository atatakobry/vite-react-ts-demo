import { gql } from '../__generated__';

export const GET_ANIME_LIST = gql(`
  query getAnimeList ($perPage: Int, $page: Int) {
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
