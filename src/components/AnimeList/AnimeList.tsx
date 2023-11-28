import React from 'react';

import AnimeCard from '../../components/AnimeCard';
import { TAnime } from '../../types/anime';

import styles from './AnimeList.module.scss';

export type TAnimeListProps = {
  animes: TAnime[];
};

const AnimeList: React.FC<TAnimeListProps> = ({ animes }) => (
  <>
    {animes.map((anime) => (
      <div className={styles.animeCard} key={anime.id}>
        <AnimeCard anime={anime} />
      </div>
    ))}
  </>
);

export default AnimeList;
