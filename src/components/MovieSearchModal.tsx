'use client';

import React, { useState } from 'react';
import { SearchMovie } from '@/generated/graphql';
import { sdk } from '@/lib/client';
import styles from '../app/styles/MovieSearchModal.module.css';



interface MovieSearchModalProps {
  listId: number;
  onMovieSelect: (movie: SearchMovie) => void;
  onClose: () => void;
}

const MovieSearchModal: React.FC<MovieSearchModalProps> = ({ listId, onMovieSelect, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchMovie[]>([]);

  const handleSearch = async () => {
    const { data } = await sdk.SearchMovieByTitle({ title: query });
    const movies = (data.searchMovieByTitle || []).filter((movie): movie is SearchMovie => movie !== null);
    setResults(movies);
  };

  const handleAddMovie = (movie: SearchMovie) => {
    onMovieSelect(movie);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie" />
        <button onClick={handleSearch}>Search</button>
        <button onClick={onClose}>Close</button>
        <div className={styles.results}>
          {results.map((movie) => (
            <div key={movie.imdbID} className={styles.resultItem}>
              <img src={movie.Poster ?? undefined} alt={movie.Title ?? 'Movie poster'} />
              <div className={styles.movieInfo}>
                <p>{movie.Title}</p>
                <button onClick={() => handleAddMovie(movie)}>Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearchModal;
