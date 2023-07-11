'use client';
import { FC, useEffect } from 'react';

import Card from './Card';
import { useMovies } from '@/store';

const TopRatedMoviesClient: FC = () => {
  const { top_rated, top_rated_page, fetchMovies, next_page } = useMovies();

  useEffect(() => {
    if (next_page) {
      fetchMovies({ category: 'top_rated', page: top_rated_page });
    }
  }, [fetchMovies, next_page, top_rated_page]);

  return (
    <>
      {top_rated?.map((movie) => {
        if (!movie.poster_path) return;
        return (
          <Card
            url={movie.poster_path}
            key={movie.id}
            title={movie.original_title}
            date={movie.release_date}
            vote={movie.vote_average * 10}
            movieId={movie.id}
            genres={movie.genre_strings}
          />
        );
      })}
    </>
  );
};

export default TopRatedMoviesClient;
