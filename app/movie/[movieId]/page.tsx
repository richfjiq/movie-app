import { FC } from 'react';

import { fetchCast, fetchMovieDetails } from '@/utils';
import { MovieCard, MovieCardMobile } from '@/components';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

interface MovieParams {
  params: { movieId: string };
}

const Movie: FC<MovieParams> = async ({ params }) => {
  const { movieId } = params;
  const details = await fetchMovieDetails(movieId, API_KEY);
  const cast = await fetchCast(movieId, API_KEY);

  return (
    <div className="w-full">
      <div className="hidden min-[950px]:block">
        <MovieCard details={details} cast={cast} />
      </div>
      <div className="min-[950px]:hidden">
        <MovieCardMobile details={details} cast={cast} />
      </div>
    </div>
  );
};

export default Movie;
