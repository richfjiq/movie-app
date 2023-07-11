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
    <div className="w-full h-[100vh] pt-[110px]">
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
                <div className="w-[300px]">
                  <img
                    className="w-[300px] h-[510px]"
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
      {/* <div className="flex w-full h-[500px] flex-col py-[30px] px-[40px]">
        <h3 className="text-[22px] font-semibold mb-[20px]">Top Billed Cast</h3>
        <div className="flex w-full">
          <div className="flex w-[77%] py-[20px] overflow-scroll">
            {cast.map((actor, index) => {
              if (index > 9) return;

              if (index === 9) {
                return (
                  <div key={actor.id} className="w-[140px] pb-[10px] mr-[20px]">
                    <div className="w-[140px] h-full flex justify-center items-center">
                      <div className="flex items-center">
                        <h3 className="font-semibold mr-1">View More</h3>
                        <Image
                          src={arrowRight}
                          height={18}
                          width={18}
                          alt="arrow right"
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={actor.id}
                  className="w-[140px] pb-[10px] rounded shadow mr-[20px] border border-platinum"
                >
                  <div className="w-[140px] h-[175px]">
                    <img
                      className="rounded-t-lg"
                      src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${actor.profile_path}`}
                    />
                  </div>
                  <h3 className="px-[10px] pt-[10px] font-semibold">
                    {actor.original_name}
                  </h3>
                  <p className="px-[10px] text-sm font-light">
                    {actor.character}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[23%] pl-[30px]">
            <h3 className="font-semibold">Status</h3>
            <p className="font-light mb-[20px]">{details.status}</p>

            <h3 className="font-semibold">Original Language</h3>
            <p className="font-light mb-[20px]">
              {getLanguage(details.original_language)}
            </p>

            <h3 className="font-semibold">Budget</h3>
            <p className="font-light mb-[20px]">
              ${new Intl.NumberFormat('en-US').format(details.budget)}
            </p>

            <h3 className="font-semibold">Revenue</h3>
            <p className="font-light mb-[20px]">
              ${new Intl.NumberFormat('en-US').format(details.revenue)}
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MovieCard;
