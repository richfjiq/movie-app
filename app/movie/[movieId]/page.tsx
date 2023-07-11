import { FC } from 'react';

import { fetchCast, fetchMovieDetails } from '@/utils';
import { MovieCard } from '@/components';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

interface MovieParams {
  params: { movieId: string };
}

const Movie: FC<MovieParams> = async ({ params }) => {
  const { movieId } = params;
  const details = await fetchMovieDetails(movieId, API_KEY);
  const cast = await fetchCast(movieId, API_KEY);

  return <MovieCard details={details} cast={cast} />;
};

export default Movie;
