/* eslint-disable jsx-a11y/alt-text */
'use client';
/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { CastElement, Details } from '@/interfaces';
import { usePalette } from '@lauriys/react-palette';
import CircleProgress from './CircleProgress';
import { getDuration } from '@/utils';
import list from '@/public/assets/list.svg';
import heart from '@/public/assets/heart.svg';
import star from '@/public/assets/star.svg';
import bookmark from '@/public/assets/bookmark.svg';
import play from '@/public/assets/play.svg';
import Cast from './Cast';

interface MovieCardProps {
  details: Details;
  cast: CastElement[];
}

const MovieCard: FC<MovieCardProps> = ({ details, cast }) => {
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
    <div className="w-full h-[100vh]">
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${details.backdrop_path})`,
        }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(
            to right,
            ${bg} calc((50vw - 170px) - 340px),
            ${bgOpacity} 50%,
            ${bgOpacity} 100%)`,
          }}
        >
          <div
            className="flex justify-center"
            style={{ background: `${data.darkMuted}90` }}
          >
            <div className="flex max-w-[1400px] w-full py-[30px] px-[40px] ">
              <div className="mr-[30px]">
                <div className="w-[300px] rounded-md">
                  <img
                    className="w-[300px] h-[510px] rounded-md"
                    src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                    alt="poster_movie"
                  />
                </div>
              </div>
              <div className="flex w-full items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cast details={details} cast={cast} />
    </div>
  );
};

export default MovieCard;
