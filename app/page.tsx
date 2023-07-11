import { FC } from 'react';
import Image from 'next/image';

import arrowIcon from '@/public/assets/arrow.svg';
import {
  LoadMoreButton,
  PopularMoviesClient,
  PopularMoviesServer,
} from '@/components';

const Home: FC = () => {
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

        <div className="min-[900px]:pl-[30px]">
          <div className="grid min-[400px]:grid-cols-2 min-[750px]:grid-cols-3 min-[900px]:grid-cols-2 min-[1050px]:grid-cols-3 min-[1250px]:grid-cols-4 min-[1350px]:grid-cols-5 gap-x-[30px] w-full">
            <PopularMoviesServer />
            <PopularMoviesClient />
          </div>
          <LoadMoreButton category="popular" />
        </div>
      </div>
    </section>
  );
};

export default Home;
