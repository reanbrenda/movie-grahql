'use client';

import { useState } from 'react';
import { sdk } from '@/lib/client';
import { MovieListItem, SearchMovie } from '@/generated/graphql';
import styles from '../app/styles/List.module.css';
import MovieSearchModal from './MovieSearchModal';



interface MovieListPageProps {
  listId: number;
  initialMovies: MovieListItem[];
}

const MovieListPage: React.FC<MovieListPageProps> = ({ listId, initialMovies }) => {
  const [movieListItems, setMovieListItems] = useState<MovieListItem[]>(initialMovies);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleAddMovie = async (movie: SearchMovie) => {
    if (movie.imdbID) {
      if (movieListItems.some((item) => item.imdb_id === movie.imdbID)) {
        console.warn('Movie already in the list');
        return;
      }

      try {
        await sdk.AddMovie({ listId, imdbId: movie.imdbID });
        const newMovieItem: MovieListItem = {
          created_at: new Date().toISOString(),
          id: Math.random(),
          imdb_id: movie.imdbID,
          movie_list_id: listId,
          movie: {
            Title: movie.Title,
            Year: movie.Year,
            imdbRating: '',
            Poster: movie.Poster,
            Genre: ''
          }
        };
        setMovieListItems((prev) => [...prev, newMovieItem]);
        setShowSearchModal(false); 
      } catch (error) {
        console.error('Failed to add movie:', error);
      }
    } else {
      console.error('Invalid IMDb ID:', movie);
    }
  };

  const handleRemoveMovie = async (movieId: number) => {
    try {
      await sdk.RemoveMovie({ removeMovieId: movieId, listId });
      setMovieListItems((prev) => prev.filter((item) => item.id !== movieId));
    } catch (error) {
      console.error('Failed to remove movie:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Movies in List</h1>
      <button onClick={() => setShowSearchModal(true)}>Add Movie</button>
      {showSearchModal && (
        <MovieSearchModal listId={listId} onMovieSelect={handleAddMovie} onClose={() => setShowSearchModal(false)} />
      )}
      {movieListItems.length === 0 ? (
        <div className={styles.emptyState}>No movies in this list.</div>
      ) : (
        <ul className={styles.movieList}>
          {movieListItems.map((item) => (
            <li key={item.id} className={styles.movieListItem}>
              <img src={item.movie.Poster ?? undefined} alt={item.movie.Title ?? 'Movie poster'} />
              <div className={styles.movieInfo}>
                <span className={styles.movieTitle}>{item.movie.Title}</span>
                <span className={styles.movieYear}>{item.movie.Year}</span>
              </div>
              <button className={styles.removeButton} onClick={() => handleRemoveMovie(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieListPage;




