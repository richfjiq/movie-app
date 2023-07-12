'use client';
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';
import { usePalette } from '@lauriys/react-palette';

import { CastElement, Details } from '@/interfaces';
import { getDuration } from '@/utils';
import bookmark from '@/public/assets/bookmark.svg';
import Cast from './Cast';
import CircleProgress from './CircleProgress';
import heart from '@/public/assets/heart.svg';
import list from '@/public/assets/list.svg';
import play from '@/public/assets/play.svg';
import star from '@/public/assets/star.svg';

interface MovieCardMobileProps {
  details: Details;
  cast: CastElement[];
}

const MovieCardMobile: FC<MovieCardMobileProps> = ({ details, cast }) => {
  const { data, loading, error } = usePalette(
    `https://image.tmdb.org/t/p/w500${details.poster_path}`
  );

  const bg = data.darkMuted;
  const bgOpacity = `${data.darkMuted}84`;
  const year = new Date(details.release_date).getFullYear();
  let genreString = '';
  details.genres?.map((genre, index) => {
    if (details.genres.length - 1 === index) {
      genreString += `${genre.name}`;
    } else {
      genreString += `${genre.name}, `;
    }
  });

  return (
    <div className="w-full pt-[110px]">
      <div
        className="bg_image_mobile"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${details.backdrop_path})`,
        }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to right, ${bg} 20%, rgba(241.5, 220.5, 199.5, 0) 50%)`,
          }}
        >
          <div className="flex justify-center">
            <div className="flex w-[100vw] h-auto py-[20px] px-[20px] min-[600px]:px-[40px]">
              <div className="mr-[30px]">
                <div className="rounded-md">
                  <img
                    className="rounded-md image_height_movie"
                    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    alt="poster_movie"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: `${bg}` }}>
        <div className="py-[16px]">
          <h1 className="text-xl min-[500px]:text-2xl min-[600px]:text-3xl min-[700px]:text-4xl text-white text-center">
            {details.title} <span className="font-light">({year})</span>
          </h1>
        </div>
        <div className="flex items-center pb-[16px]">
          <div className="w-[50%] flex justify-center">
            <CircleProgress
              details
              rated={Math.floor(details.vote_average * 10)}
            />
            <div className="flex flex-col justify-center ml-[6px] mr-[20px]">
              <h3 className="font-bold text-white">User</h3>
              <h3 className="font-bold text-white">Score</h3>
            </div>
          </div>
          <div className="w-[50%] flex justify-center">
            <div className="flex">
              <Image src={play} width={23} height={23} alt="list icon" />
              <h3 className="font-normal text-white ml-[5px]">Play Trailer</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-[10px] bg-white/10">
          <div className="flex">
            <p className="text-white font-light mr-2">{details.release_date}</p>
            <p className="text-white font-light mr-2">
              {getDuration(details.runtime)}
            </p>
          </div>
          <div>
            <p className="text-white font-light mr-2">{genreString}</p>
          </div>
        </div>
        <div className="py-[20px] px-[20px] min-[600px]:px-[40px]">
          <p className="text-lg text-white font-light italic">
            {details.tagline}
          </p>
          <h3 className="text-xl text-white font-semibold mt-[10px] mb-[8px]">
            Overview
          </h3>
          <p className="text-white font-light">{details.overview}</p>
        </div>
      </div>
      {/* <div className="flex w-full items-center">
                <div className="flex flex-col">
                  <h1 className="text-4xl text-white font-semibold">
                    {details.title}{' '}
                    <span className="font-normal">({year})</span>
                  </h1>
                  <div className="flex mb-[24px]">
                    <p className="text-white font-light mr-2">
                      {details.release_date}
                    </p>
                    <p className="text-white font-light mr-2"> {genreString}</p>
                    <p className="text-white font-light mr-2">
                      {getDuration(details.runtime)}
                    </p>
                  </div>
                  <div className="flex items-center mb-[24px]">
                    <CircleProgress
                      details
                      rated={Math.floor(details.vote_average * 10)}
                    />
                    <div className="flex flex-col justify-center ml-[6px] mr-[20px]">
                      <h3 className="font-bold text-white">User</h3>
                      <h3 className="font-bold text-white">Score</h3>
                    </div>
                    <div className="flex justify-center items-center h-[46px] w-[46px] bg-oxford-blue rounded-full mr-[20px]">
                      <Image
                        src={list}
                        width={16}
                        height={16}
                        alt="list icon"
                      />
                    </div>
                    <div className="flex justify-center items-center h-[46px] w-[46px] bg-oxford-blue rounded-full mr-[20px]">
                      <Image
                        src={heart}
                        width={16}
                        height={16}
                        alt="list icon"
                      />
                    </div>
                    <div className="flex justify-center items-center h-[46px] w-[46px] bg-oxford-blue rounded-full mr-[20px]">
                      <Image
                        src={bookmark}
                        width={16}
                        height={16}
                        alt="list icon"
                      />
                    </div>
                    <div className="flex justify-center items-center h-[46px] w-[46px] bg-oxford-blue rounded-full mr-[20px]">
                      <Image
                        src={star}
                        width={16}
                        height={16}
                        alt="list icon"
                      />
                    </div>
                    <div className="flex">
                      <Image
                        src={play}
                        width={23}
                        height={23}
                        alt="list icon"
                      />
                      <h3 className="font-normal text-white ml-[5px]">
                        Play Trailer
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-white font-light italic">
                    {details.tagline}
                  </p>
                  <h3 className="text-xl text-white font-semibold mt-[10px] mb-[8px]">
                    Overview
                  </h3>
                  <p className="text-white font-light">{details.overview}</p>
                </div>
              </div> */}
      <Cast details={details} cast={cast} />
    </div>
  );
};

export default MovieCardMobile;
