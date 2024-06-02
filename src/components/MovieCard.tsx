'use client';

import React from 'react';
import { Movie } from '@/generated/graphql';
import styles from '../app/styles/MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img src={movie.Poster ?? undefined} alt={movie.Title ?? 'Movie poster'} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <p>{movie.imdbRating}</p>
      <p>{movie.Genre}</p>
    </div>
  );
};

export default MovieCard;
