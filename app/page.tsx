import Image from 'next/image';

import arrowIcon from '@/public/assets/arrow.svg';
import { Card } from '@/components';

const Home = () => {
  return (
    <section className="max-w-[1320px] w-full pt-[94px] px-[20px] min-[600px]:px-[40px]">
      <h2 className="font-semibold text-[26px] mb-5">Popular Movies</h2>
      <div className="flex">
        <div>
          <div className="flex w-[258px] cursor-pointer justify-between items-center px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
            <h2 className="text-lg font-semibold">Sort</h2>
            <Image src={arrowIcon} alt="Arrow icon" height={20} width={20} />
          </div>

          <div className="flex w-[258px] cursor-pointer justify-between items-center px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
            <h2 className="text-lg font-semibold">Where to watch</h2>
            <div className="flex">
              <p className="text-sm font-light mr-[10px] px-[10px] rounded-lg bg-platinum/70">
                52
              </p>
              <Image src={arrowIcon} alt="Arrow icon" height={20} width={20} />
            </div>
          </div>

          <div className="flex w-[258px] cursor-pointer justify-between items-center px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Image src={arrowIcon} alt="Arrow icon" height={20} width={20} />
          </div>

          <button className="w-full h-[44px] bg-platinum/70 rounded-[20px] text-xl font-semibold text-black/50 mt-[10px]">
            Search
          </button>
        </div>
        <div className="flex pl-[30px] w-full flex-wrap justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Home;
