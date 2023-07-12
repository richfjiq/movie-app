import { FC } from 'react';

import {
  LoadMoreButton,
  PopularMoviesClient,
  PopularMoviesServer,
  SearchComponent,
} from '@/components';

const Home: FC = () => {
  return (
    <section className="max-w-[1400px] w-full pt-[94px] px-[20px] min-[600px]:px-[40px]">
      <h2 className="font-semibold text-[26px] mb-5">Popular Movies</h2>
      <div className="min-[900px]:flex">
        <div className="w-full min-[900px]:w-[258px]">
          <SearchComponent />
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
