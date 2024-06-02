"use client";

import { sdk } from '@/lib/client';
import { Movie } from '@/generated/graphql';
import Layout from '../../../components/Layout';

interface MovieDetailsPageProps {
  params: {
    imdbId: string;
  };
}

export default async function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  const { data } = await sdk.SearchMovieById({ searchMovieByIdId: params.imdbId });

  if (!data.searchMovieById) {
    return <Layout>Movie not found</Layout>;
  }

  const movie: Movie = data.searchMovieById;

  return (
    <Layout>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster ?? undefined} alt={movie.Title ?? 'Movie poster'} />
      <p>{movie.Plot}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Director}</p>
      <p>{movie.Writer}</p>
      <p>{movie.Actors}</p>
    </Layout>
  );
}
