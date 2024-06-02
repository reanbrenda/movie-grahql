"use client";

import { sdk } from '@/lib/client';
import { Movie } from '@/generated/graphql';
import Layout from '../../../components/Layout';

import styles  from '../../styles/MovieDetails.module.css'

interface MovieDetailsPageProps {
  params: {
    imdbId: string;
  };
}

const MovieDetailsPage: React.FC<MovieDetailsPageProps> = async ({ params }) => {
  const { imdbId } = params;
  const { data } = await sdk.SearchMovieById({ searchMovieByIdId: imdbId });
  const movie: Movie | null = data.searchMovieById ?? null;

  if (!movie) {
    return (
      <Layout>
        <div className={styles.container}>
          <h1>Movie not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster ?? undefined} alt={movie.Title ?? 'Movie poster'} />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Writer:</strong> {movie.Writer}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      </div>
    </Layout>
  );
};

export default MovieDetailsPage;
