import { fetchCast, fetchMovieDetails } from '@/utils';
import { FC } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

interface MovieParams {
  params: { movieId: string };
}

const Movie: FC<MovieParams> = async ({ params }) => {
  const { movieId } = params;
  const details = await fetchMovieDetails(movieId, API_KEY);
  const cast = await fetchCast(movieId, API_KEY);

  console.log({ cast });

  return (
    <div className="w-full h-[100vh] bg-platinum pt-[110px]">
      <div className="w-full h-[570px] bg-cyan flex justify-center">
        <div className="flex max-w-[1400px] w-full bg-white py-[30px] px-[40px]">
          <div className="flex w-[300px] mr-[30px] bg-dark-jungle-green"></div>
          <div className="bg-pear flex w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
