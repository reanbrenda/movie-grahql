import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddMovieResponse = {
  __typename?: 'AddMovieResponse';
  created_at: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imdb_id: Scalars['String']['output'];
  movie: Movie;
  movie_list_id: Scalars['Int']['output'];
};

export type CreateListInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateTodoListInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Movie = {
  __typename?: 'Movie';
  Actors?: Maybe<Scalars['String']['output']>;
  Awards?: Maybe<Scalars['String']['output']>;
  BoxOffice?: Maybe<Scalars['String']['output']>;
  Country?: Maybe<Scalars['String']['output']>;
  DVD?: Maybe<Scalars['String']['output']>;
  Director?: Maybe<Scalars['String']['output']>;
  Genre?: Maybe<Scalars['String']['output']>;
  Language?: Maybe<Scalars['String']['output']>;
  Metascore?: Maybe<Scalars['String']['output']>;
  Plot?: Maybe<Scalars['String']['output']>;
  Poster?: Maybe<Scalars['String']['output']>;
  Production?: Maybe<Scalars['String']['output']>;
  Rated?: Maybe<Scalars['String']['output']>;
  Ratings?: Maybe<Array<Maybe<Rating>>>;
  Released?: Maybe<Scalars['String']['output']>;
  Response?: Maybe<Scalars['String']['output']>;
  Runtime?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Website?: Maybe<Scalars['String']['output']>;
  Writer?: Maybe<Scalars['String']['output']>;
  Year?: Maybe<Scalars['String']['output']>;
  imdbID?: Maybe<Scalars['String']['output']>;
  imdbRating?: Maybe<Scalars['String']['output']>;
  imdbVotes?: Maybe<Scalars['String']['output']>;
};

export type MovieList = {
  __typename?: 'MovieList';
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type MovieListItem = {
  __typename?: 'MovieListItem';
  created_at: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imdb_id: Scalars['String']['output'];
  movie: Movie;
  movie_list_id: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovie: AddMovieResponse;
  addTODO: TodoListItem;
  createList: MovieList;
  createTODOList: TodoList;
  deleteList: Scalars['Boolean']['output'];
  deleteTODOList: Scalars['Boolean']['output'];
  finishTODO: TodoListItem;
  removeMovie: Scalars['Boolean']['output'];
  removeTODO: Scalars['Boolean']['output'];
};


export type MutationAddMovieArgs = {
  imdbId: Scalars['String']['input'];
  listId: Scalars['Int']['input'];
};


export type MutationAddTodoArgs = {
  desc: Scalars['String']['input'];
  listId: Scalars['Int']['input'];
};


export type MutationCreateListArgs = {
  input: CreateListInput;
};


export type MutationCreateTodoListArgs = {
  input: CreateTodoListInput;
};


export type MutationDeleteListArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTodoListArgs = {
  id: Scalars['Int']['input'];
};


export type MutationFinishTodoArgs = {
  id: Scalars['Int']['input'];
  listId: Scalars['Int']['input'];
};


export type MutationRemoveMovieArgs = {
  id: Scalars['Int']['input'];
  listId: Scalars['Int']['input'];
};


export type MutationRemoveTodoArgs = {
  id: Scalars['Int']['input'];
  listId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getMovieList: MovieList;
  getMovieListItems: Array<MovieListItem>;
  getMovieLists: Array<MovieList>;
  getTODOList: TodoList;
  getTODOLists: Array<TodoList>;
  getTODOs: Array<TodoListItem>;
  searchMovieById?: Maybe<Movie>;
  searchMovieByTitle?: Maybe<Array<Maybe<SearchMovie>>>;
};


export type QueryGetMovieListArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetMovieListItemsArgs = {
  listId: Scalars['Int']['input'];
};


export type QueryGetMovieListsArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetTodoListArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetTodoListsArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetTodOsArgs = {
  listId: Scalars['Int']['input'];
};


export type QuerySearchMovieByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySearchMovieByTitleArgs = {
  title: Scalars['String']['input'];
  year?: InputMaybe<Scalars['String']['input']>;
};

export type Rating = {
  __typename?: 'Rating';
  Source?: Maybe<Scalars['String']['output']>;
  Value?: Maybe<Scalars['String']['output']>;
};

export type SearchMovie = {
  __typename?: 'SearchMovie';
  Poster?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
  Year?: Maybe<Scalars['String']['output']>;
  imdbID?: Maybe<Scalars['String']['output']>;
};

export type TodoList = {
  __typename?: 'TODOList';
  created_at: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TodoListItem = {
  __typename?: 'TODOListItem';
  created_at: Scalars['String']['output'];
  desc: Scalars['String']['output'];
  finished: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  todo_list_id: Scalars['Int']['output'];
};

export type CreateListMutationVariables = Exact<{
  input: CreateListInput;
}>;


export type CreateListMutation = { __typename?: 'Mutation', createList: { __typename?: 'MovieList', created_at: string, email: string, id: number, name: string } };

export type GetMovieListsQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetMovieListsQuery = { __typename?: 'Query', getMovieLists: Array<{ __typename?: 'MovieList', id: number, created_at: string, name: string, email: string }> };

export type GetMovieListItemsQueryVariables = Exact<{
  listId: Scalars['Int']['input'];
}>;


export type GetMovieListItemsQuery = { __typename?: 'Query', getMovieListItems: Array<{ __typename?: 'MovieListItem', created_at: string, id: number, imdb_id: string, movie_list_id: number, movie: { __typename?: 'Movie', Title?: string | null, imdbRating?: string | null, Year?: string | null, Poster?: string | null, Genre?: string | null } }> };

export type AddMovieMutationVariables = Exact<{
  listId: Scalars['Int']['input'];
  imdbId: Scalars['String']['input'];
}>;


export type AddMovieMutation = { __typename?: 'Mutation', addMovie: { __typename?: 'AddMovieResponse', created_at: string, id: number, imdb_id: string, movie: { __typename?: 'Movie', Poster?: string | null, Year?: string | null, imdbRating?: string | null, Title?: string | null } } };

export type RemoveMovieMutationVariables = Exact<{
  removeMovieId: Scalars['Int']['input'];
  listId: Scalars['Int']['input'];
}>;


export type RemoveMovieMutation = { __typename?: 'Mutation', removeMovie: boolean };

export type SearchMovieByTitleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type SearchMovieByTitleQuery = { __typename?: 'Query', searchMovieByTitle?: Array<{ __typename?: 'SearchMovie', Poster?: string | null, Title?: string | null, Type?: string | null, Year?: string | null, imdbID?: string | null } | null> | null };

export type SearchMovieByIdQueryVariables = Exact<{
  searchMovieByIdId: Scalars['String']['input'];
}>;


export type SearchMovieByIdQuery = { __typename?: 'Query', searchMovieById?: { __typename?: 'Movie', Title?: string | null, Year?: string | null, imdbRating?: string | null, Genre?: string | null, Plot?: string | null, Poster?: string | null, Director?: string | null, Writer?: string | null, Actors?: string | null } | null };


export const CreateListDocument = gql`
    mutation CreateList($input: CreateListInput!) {
  createList(input: $input) {
    created_at
    email
    id
    name
  }
}
    `;
export const GetMovieListsDocument = gql`
    query GetMovieLists($email: String!) {
  getMovieLists(email: $email) {
    id
    created_at
    name
    email
  }
}
    `;
export const GetMovieListItemsDocument = gql`
    query GetMovieListItems($listId: Int!) {
  getMovieListItems(listId: $listId) {
    created_at
    id
    imdb_id
    movie {
      Title
      imdbRating
      Year
      Poster
      Genre
    }
    movie_list_id
  }
}
    `;
export const AddMovieDocument = gql`
    mutation AddMovie($listId: Int!, $imdbId: String!) {
  addMovie(listId: $listId, imdbId: $imdbId) {
    created_at
    id
    imdb_id
    movie {
      Poster
      Year
      imdbRating
      Title
    }
  }
}
    `;
export const RemoveMovieDocument = gql`
    mutation RemoveMovie($removeMovieId: Int!, $listId: Int!) {
  removeMovie(id: $removeMovieId, listId: $listId)
}
    `;
export const SearchMovieByTitleDocument = gql`
    query SearchMovieByTitle($title: String!) {
  searchMovieByTitle(title: $title) {
    Poster
    Title
    Type
    Year
    imdbID
  }
}
    `;
export const SearchMovieByIdDocument = gql`
    query SearchMovieById($searchMovieByIdId: String!) {
  searchMovieById(id: $searchMovieByIdId) {
    Title
    Year
    imdbRating
    Genre
    Plot
    Poster
    Director
    Writer
    Actors
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const CreateListDocumentString = print(CreateListDocument);
const GetMovieListsDocumentString = print(GetMovieListsDocument);
const GetMovieListItemsDocumentString = print(GetMovieListItemsDocument);
const AddMovieDocumentString = print(AddMovieDocument);
const RemoveMovieDocumentString = print(RemoveMovieDocument);
const SearchMovieByTitleDocumentString = print(SearchMovieByTitleDocument);
const SearchMovieByIdDocumentString = print(SearchMovieByIdDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateList(variables: CreateListMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateListMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateListMutation>(CreateListDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateList', 'mutation', variables);
    },
    GetMovieLists(variables: GetMovieListsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetMovieListsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetMovieListsQuery>(GetMovieListsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMovieLists', 'query', variables);
    },
    GetMovieListItems(variables: GetMovieListItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: GetMovieListItemsQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetMovieListItemsQuery>(GetMovieListItemsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMovieListItems', 'query', variables);
    },
    AddMovie(variables: AddMovieMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: AddMovieMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<AddMovieMutation>(AddMovieDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddMovie', 'mutation', variables);
    },
    RemoveMovie(variables: RemoveMovieMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: RemoveMovieMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<RemoveMovieMutation>(RemoveMovieDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RemoveMovie', 'mutation', variables);
    },
    SearchMovieByTitle(variables: SearchMovieByTitleQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SearchMovieByTitleQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SearchMovieByTitleQuery>(SearchMovieByTitleDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchMovieByTitle', 'query', variables);
    },
    SearchMovieById(variables: SearchMovieByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: SearchMovieByIdQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<SearchMovieByIdQuery>(SearchMovieByIdDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchMovieById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;