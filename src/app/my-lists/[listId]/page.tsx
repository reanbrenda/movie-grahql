import { sdk } from '@/lib/client';
import { GetMovieListItemsQuery, MovieListItem, SearchMovie } from '@/generated/graphql';
import Layout from '@/components/Layout';
import MovieListPage from '../../../components/MovieListPage';


interface ListPageProps {
  params: {
    listId: string;
  };
}

export default async function ListPage({ params }: ListPageProps) {
  const listId = parseInt(params.listId, 10);
  const { data } = await sdk.GetMovieListItems({ listId });
  const movies: MovieListItem[] = data.getMovieListItems;

  return (
    <Layout>
      <MovieListPage listId={listId} initialMovies={movies} />
    </Layout>
  );
}

