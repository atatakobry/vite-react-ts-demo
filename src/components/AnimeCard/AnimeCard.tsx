import classNames from 'classnames';
import React from 'react';

import { TAnime } from '../../types/anime';

import styles from './AnimeCard.module.scss';

export type TAnimeCardProps = {
  anime: TAnime;
};

const AnimeCard: React.FC<TAnimeCardProps> = ({ anime }) => {
  return (
    <div className={styles.anime}>
      <img className={styles.coverImage} src={anime.coverImage.extraLarge} alt="" />
      <div className={styles.titles}>
        <div className={styles.title}>{anime.title.english || anime.title.romaji}</div>
        <div className={classNames(styles.title, styles.native)}>{anime.title.native}</div>
      </div>
    </div>
  );
};

export default AnimeCard;
