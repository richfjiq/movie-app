import { FC } from 'react';
import Image from 'next/image';

import dotsIcon from '@/public/assets/dotsIcon.svg';
import CircleProgress from './CircleProgress';

const Card: FC = () => {
  return (
    <div className="w-[180px] border border-platinum rounded-lg shadow-lg mb-[30px]">
      <div>
        <div className="relative">
          <a>
            <Image
              className="rounded-t-lg cursor-pointer"
              src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
              alt="movie picture"
              width={180}
              height={235}
            />
          </a>
          <Image
            className="absolute right-2 top-2 opacity-60 cursor-pointer"
            src={dotsIcon}
            alt="Dots icon"
            width={26}
            height={26}
          />

          <CircleProgress rated={80} />
        </div>
        <div className="pt-[26px] px-[10px] pb-[12px]">
          <a className="font-bold cursor-pointer">Fast X</a>
          <p className="text-black/60">May 17, 2023</p>
          <p className="text-black/60">Action, Crime, Thriller</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
