'use client';
import { FC } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import arrowIcon from '@/public/assets/arrow.svg';
import Link from 'next/link';

const SearchComponent: FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col w-full min-[900px]:w-[258px] px-[16px] py-[14px] border border-platinum rounded-lg shadow-lg mb-[12px]">
        <h2 className="text-lg font-semibold py-1 cursor-pointer">Movies</h2>
        <Link
          href={'/'}
          className={pathname === '/' ? 'bg-cyan/50 px-2 rounded' : ''}
        >
          <h2 className="text-lg font-normal py-1 cursor-pointer">Popular</h2>
        </Link>
        <Link
          href={'/upcoming'}
          className={pathname === '/upcoming' ? 'bg-cyan/50 px-2 rounded' : ''}
        >
          <h2 className="text-lg font-normal py-1 cursor-pointer">Upcoming</h2>
        </Link>
        <Link
          href={'/top_rated'}
          className={pathname === '/top_rated' ? 'bg-cyan/50 px-2 rounded' : ''}
        >
          <h2 className="text-lg font-normal py-1 cursor-pointer">Top Rated</h2>
        </Link>
      </div>
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
    </>
  );
};

export default SearchComponent;
