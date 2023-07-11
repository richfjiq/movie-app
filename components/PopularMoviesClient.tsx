'use client';
import { FC, useEffect } from 'react';

import Card from './Card';
import { useMovies } from '@/store';

const PopularMoviesClient: FC = () => {
  const { popular, popular_page, fetchMovies, next_page } = useMovies();

  useEffect(() => {
    if (next_page) {
      fetchMovies({ category: 'popular', page: popular_page });
    }
  }, [fetchMovies, next_page, popular_page]);

  return (
    <>
      {popular?.map((movie) => {
        if (!movie.poster_path) return;
        return (
          <Card
            url={movie.poster_path}
            key={movie.id}
            title={movie.original_title}
            date={movie.release_date}
            vote={movie.vote_average * 10}
          />
        );
      })}
    </>
  );
};

export default PopularMoviesClient;
