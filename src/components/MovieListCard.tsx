'use client';

import React from 'react';
import { MovieList } from '@/generated/graphql';
import styles from '../app/styles//MovieListCard.module.css';
import Link from 'next/link';

interface MovieListCardProps {
  list: MovieList;
}

const MovieListCard: React.FC<MovieListCardProps> = ({ list }) => {
  return (
    <div className={styles.card}>
      <h2>{list.name}</h2>
      <p>Created at: {new Date(list.created_at).toLocaleDateString()}</p>
      <Link href={`/my-lists/${list.id}`} className={styles.link}>
        View List
      </Link>
    </div>
  );
};

export default MovieListCard;

