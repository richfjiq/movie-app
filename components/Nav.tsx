import { FC } from 'react';
import Image from 'next/image';

import logoIcon from '@/public/assets/logo.svg';
import plusIcon from '@/public/assets/plus.svg';
import searchIcon from '@/public/assets/search.svg';

const Nav: FC = () => {
  return (
    <nav className="flex w-full bg-[#032541] fixed h-[64px] justify-center">
      <div className="flex max-w-[1320px] w-full pl-10 pr-10 justify-between">
        <div className="flex h-full items-center">
          <a href="/#" className="mr-4">
            <Image
              priority
              src={logoIcon}
              alt="TMDB logo"
              width={154}
              height={20}
            />
          </a>
          <ul className="flex">
            <li>
              <a href="/#" className="text-white ml-4 mr-4">
                Movies
              </a>
            </li>
            <li>
              <a href="/#" className="text-white ml-4 mr-4">
                TV Shows
              </a>
            </li>
            <li>
              <a href="/#" className="text-white ml-4 mr-4">
                Shows
              </a>
            </li>
            <li>
              <a href="/#" className="text-white ml-4 mr-4">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="flex h-full">
          <ul className="flex items-center">
            <li className="mr-4">
              <a href="/#" className="text-white ml-4 mr-4">
                <Image src={plusIcon} alt="Plus icon" width={23} height={23} />
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="text-white text-sm ml-4 mr-4 px-1 py-1 border rounded-sm"
              >
                EN
              </a>
            </li>
            <li>
              <a href="/#" className="text-white ml-4 mr-4">
                Join TMDB
              </a>
            </li>
            <li className="ml-4">
              <a href="/#" className="text-white ml-4 mr-4">
                <Image
                  src={searchIcon}
                  alt="Search icon"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
