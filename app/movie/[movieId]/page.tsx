import { FC } from 'react';

import { fetchCast, fetchMovieDetails } from '@/utils';
import { MovieCard, MovieCardMobile } from '@/components';
import arrow from '@/public/assets/arrow.svg';
import Image from 'next/image';

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
      <div className="flex pt-[64px]">
        <div className="flex w-full justify-center">
          <div className="flex items-center py-[10px] mr-[30px] mb-[2px] border-b-4 border-b-cyan">
            <p>Overview</p>
            <Image
              className="rotate-90 ml-[4px]"
              src={arrow}
              alt="arrow down"
              height={16}
              width={16}
            />
          </div>
          <div className="flex items-center mr-[30px]">
            <p>Media</p>
            <Image
              className="rotate-90 ml-[4px]"
              src={arrow}
              alt="arrow down"
              height={16}
              width={16}
            />
          </div>
          <div className="flex items-center mr-[30px]">
            <p>Fandom</p>
            <Image
              className="rotate-90 ml-[4px]"
              src={arrow}
              alt="arrow down"
              height={16}
              width={16}
            />
          </div>
          <div className="flex items-center ">
            <p>Share</p>
            <Image
              className="rotate-90 ml-[4px]"
              src={arrow}
              alt="arrow down"
              height={16}
              width={16}
            />
          </div>
        </div>
      </div>
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
