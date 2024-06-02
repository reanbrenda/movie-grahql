'use client';

import { sdk } from '@/lib/client';
import MovieListCard from '@/components/MovieListCard';
import { MovieList } from '@/generated/graphql';
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css';
import CreateListForm from '@/components/CreateListForm';
import { EMAIL } from '@/constants';
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [lists, setLists] = useState<MovieList[]>([]);

  const fetchLists = async () => {
    const { data } = await sdk.GetMovieLists({ email: EMAIL });
    setLists(data.getMovieLists);
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <Layout>
      <h1>Movie Lists</h1>
      {lists.length === 0 ? (
        <p>No lists available.</p>
      ) : (
        lists.map((list) => <MovieListCard key={list.id} list={list} />)
      )}
      <CreateListForm onListCreated={fetchLists} />
    </Layout>
  );
};

export default Home;

