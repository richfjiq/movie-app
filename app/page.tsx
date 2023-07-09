'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import arrowIcon from '@/public/assets/arrow.svg';
import { Card } from '@/components';
import { Movies, Result } from '@/interfaces';

interface Props {
  movies: Result[];
}

const Home: FC<Props> = () => {
  const [category, setCategory] = useState('popular');
  const [movies, setMovies] = useState<Result[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

  console.log(API_KEY);

  const getMovies = useCallback(async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=1`
    );
    const repo: Movies = await res.json();
    setMovies(repo.results);
  }, [category, API_KEY]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  console.log({ movies });
  return (
    <section className="max-w-[1400px] w-full pt-[94px] px-[20px] min-[600px]:px-[40px]">
      <h2 className="font-semibold text-[26px] mb-5">Popular Movies</h2>
      <div className="min-[900px]:flex">
        <div>
          <div className="flex w-full min-[900px]:w-[258px] cursor-pointer justify-between items-center px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
            <h2 className="text-lg font-semibold">Sort</h2>
            <Image src={arrowIcon} alt="Arrow icon" height={20} width={20} />
          </div>

          <div className="flex w-full min-[900px]:w-[258px] cursor-pointer justify-between items-center px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
            <h2 className="text-lg font-semibold">Where to watch</h2>
            <div className="flex">
              <p className="text-sm font-light mr-[10px] px-[10px] rounded-lg bg-platinum/70">
                52
              </p>
              <Image src={arrowIcon} alt="Arrow icon" height={20} width={20} />
            </div>
          </div>

          <div className="flex w-full min-[900px]:w-[258px] cursor-pointer justify-between items-center px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Image src={arrowIcon} alt="Arrow icon" height={20} width={20} />
          </div>

          <button className="w-full mb-[20px] min-[900px]:mb-0 h-[44px] bg-platinum/70 rounded-[20px] text-xl font-semibold text-black/50 mt-[10px]">
            Search
          </button>
        </div>
        <div className="grid min-[400px]:grid-cols-2 min-[750px]:grid-cols-3 min-[900px]:grid-cols-2 min-[1050px]:grid-cols-3 min-[1250px]:grid-cols-4 min-[1350px]:grid-cols-5 gap-x-[30px] w-full min-[900px]:pl-[30px]">
          {movies?.map((movie) => (
            <Card key={movie.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
