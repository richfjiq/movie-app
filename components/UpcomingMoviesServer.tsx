import { FC } from 'react';

import { fetchData } from '@/utils';
import Card from './Card';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

const UpcomingMoviesServer: FC = async () => {
  const res = await fetchData('upcoming', API_KEY);

  return (
    <>
      {res?.map((movie) => {
        if (!movie.poster_path) return;
        return (
          <Card
            url={movie.poster_path}
            key={movie.id}
            title={movie.original_title}
            date={movie.release_date}
            vote={movie.vote_average * 10}
            genres={movie.genre_strings}
          />
        );
      })}
    </>
  );
};

export default UpcomingMoviesServer;
