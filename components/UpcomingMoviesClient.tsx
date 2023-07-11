'use client';
import { FC, useEffect } from 'react';

import Card from './Card';
import { useMovies } from '@/store';

const UpcomingMoviesClient: FC = () => {
  const { upcoming, upcoming_page, fetchMovies, next_page } = useMovies();

  useEffect(() => {
    if (next_page) {
      fetchMovies({ category: 'upcoming', page: upcoming_page });
    }
  }, [fetchMovies, next_page, upcoming_page]);

  return (
    <>
      {upcoming?.map((movie) => {
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

export default UpcomingMoviesClient;
