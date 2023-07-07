'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import {
  AiOutlineMenu,
  AiOutlineClockCircle,
  AiOutlineStar,
} from 'react-icons/ai';
import { BiSearchAlt2, BiMovie, BiLogIn } from 'react-icons/bi';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { SiShowtime } from 'react-icons/si';
import { CgMoreO } from 'react-icons/cg';
import { GiPopcorn } from 'react-icons/gi';
import { FiUserPlus } from 'react-icons/fi';

import logoIcon from '@/public/assets/logo.svg';
import plusIcon from '@/public/assets/plus.svg';
import searchIcon from '@/public/assets/search.svg';

const Nav: FC = () => {
  const [nav, setNav] = useState(false);

  const toggleNavbar = () => {
    setNav((prev) => !prev);
  };

  console.log({ nav });

  return (
    <nav className="flex w-full bg-oxford-blue fixed h-[64px] justify-center">
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
          <ul className="flex max-[1000px]:hidden">
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
          <ul className="flex items-center max-[700px]:hidden">
            <li className="mr-4">
              <a href="/#" className="text-white ml-4 mr-4">
                <Image src={plusIcon} alt="Plus icon" width={23} height={23} />
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="text-white text-sm ml-4 mr-4 px-1 py-1 border rounded-sm hover:bg-white hover:text-oxford-blue"
              >
                EN
              </a>
            </li>
            <li>
              <a href="/#" className="text-white ml-4 mr-4">
                Login
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
          <ul className="flex items-center">
            <li className="ml-8 cursor-pointer min-[1000px]:hidden">
              <AiOutlineMenu
                className="w-[25px] h-[25px]"
                color="white"
                onClick={toggleNavbar}
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-[100svh] bg-[black]/50'
            : 'fixed left-[-100%] top-0 w-[100%] h-[100svh] bg-[black]/0'
        }
        onClick={() => setNav(false)}
      >
        <div
          className={
            nav
              ? `fixed py-10 px-6 h-[100vh] w-[50%] min-[500px]:w-[45%] min-[600px]:w-[35%] min-[800px]:w-[30%] right-0 top-0 bg-oxford-blue ease-in duration-[500ms]`
              : 'fixed py-10 px-6 h-[100vh] w-[50%] min-[500px]:w-[45%] min-[600px]:w-[35%] min-[800px]:w-[30%] right-[-100%] top-0 bg-oxford-blue ease-in duration-[500ms]'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center mb-5">
            <input
              className="p-1 w-full bg-oxford-blue border-b-[1px] border-white"
              placeholder="Search"
              autoFocus
              type="text"
            />
            <BiSearchAlt2
              className="absolute right-6 w-[25px] h-[25px]"
              color="white"
            />
          </div>
          <ul className="mb-10">
            <li className="flex text-white mb-4 cursor-pointer">
              <BiMovie className="w-[25px] h-[25px] mr-2" />
              Movies
            </li>
            <ul className="pl-8">
              <li className="flex text-white mb-4 cursor-pointer">
                <GiPopcorn className="w-[25px] h-[25px] mr-2" />
                Popular
              </li>
              <li className="flex text-white mb-4 cursor-pointer">
                <AiOutlineClockCircle className="w-[25px] h-[25px] mr-2" />
                Upcoming
              </li>
              <li className="flex text-white mb-4 cursor-pointer">
                <AiOutlineStar className="w-[25px] h-[25px] mr-2" />
                Top Rated
              </li>
            </ul>
            <li className="flex text-white mb-4 cursor-pointer">
              <PiTelevisionSimpleBold className="w-[25px] h-[25px] mr-2" />
              TV Shows
            </li>
            <li className="flex text-white mb-4 cursor-pointer">
              <SiShowtime className="w-[25px] h-[25px] mr-2" />
              Shows
            </li>
            <li className="flex text-white mb-4 cursor-pointer">
              <CgMoreO className="w-[25px] h-[25px] mr-2" />
              More
            </li>
          </ul>
          <ul className="min-[700px]:hidden">
            <div className="border-b-[1px] border-white mb-5" />
            <li className="flex text-white mb-4 cursor-pointer">
              <BiLogIn className="w-[25px] h-[25px] mr-2" />
              Login
            </li>
            <li className="flex text-white mb-4 cursor-pointer">
              <FiUserPlus className="w-[25px] h-[25px] mr-2" />
              Join TMDB
            </li>
            <li className="text-white mb-4">
              <Image
                className="cursor-pointer"
                src={plusIcon}
                alt="Plus icon"
                width={23}
                height={23}
              />
            </li>
            <span className="text-white cursor-pointer text-sm px-1 py-1 border rounded-sm hover:bg-white hover:text-oxford-blue">
              EN
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
