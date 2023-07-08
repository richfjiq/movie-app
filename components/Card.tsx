import Image from 'next/image';
import { FC } from 'react';

const Card: FC = () => {
  return (
    <div className="w-[180px] border border-platinum rounded-lg shadow-lg mb-[30px]">
      <div>
        <a>
          <Image
            className="rounded-t-lg"
            src="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
            alt="movie picture"
            width={180}
            height={235}
          />
        </a>
        <div className="pt-[26px] px-[10px] pb-[12px]">
          <a>Fast X</a>
          <p>May 17, 2023</p>
          <p>Action, Crime, Thriller</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
