/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { CastElement, Details } from '@/interfaces';
import arrowRight from '@/public/assets/arrow_right.svg';
import { getLanguage } from '@/utils';

interface CastProps {
  details: Details;
  cast: CastElement[];
}

const Cast: FC<CastProps> = ({ cast, details }) => {
  return (
    <div className="flex w-full h-[500px] flex-col py-[30px] px-[40px]">
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
                    alt="actor"
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
    </div>
  );
};

export default Cast;
