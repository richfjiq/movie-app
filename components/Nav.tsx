'use client';
import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoIcon from '@/public/assets/logo.svg';
import plusIcon from '@/public/assets/plus.svg';
import searchIcon from '@/public/assets/search.svg';
import userIcon from '@/public/assets/userIcon.svg';
import menuIcon from '@/public/assets/menuIcon.svg';
import logoMobile from '@/public/assets/logoMobile.svg';

const Nav: FC = () => {
  const navRef = useRef(null);
  const [nav, setNav] = useState(false);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleNavbar = () => {
    setNav((prev) => !prev);
  };

  useEffect(() => {
    setPosition(window.scrollY);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  return (
    <nav
      ref={navRef}
      className={
        visible
          ? 'flex z-10 fixed w-full bg-oxford-blue h-[64px] justify-center translate-y-0 transition-transform ease-in duration-[3000]'
          : 'flex z-10 fixed w-full bg-oxford-blue h-[64px] justify-center translate-y-[-100%] transition-transform ease-in duration-[3000]'
      }
    >
      <div className="flex max-w-[1400px] w-full pl-5 pr-5 min-[600px]:pl-10 min-[600px]:pr-10 justify-between">
        <ul className="w-[33%] flex items-center min-[901px]:hidden">
          <li className="cursor-pointer" onClick={toggleNavbar}>
            <Image src={menuIcon} alt="Menu icon" width={25} height={25} />
          </li>
        </ul>

        <div className="flex h-full items-center max-[900px]:w-[34%] max-[900px]:justify-center">
          <a href="/#" className="max-[600px]:hidden min-[900px]:mr-4">
            <Image
              priority
              src={logoIcon}
              alt="TMDB logo"
              width={154}
              height={20}
            />
          </a>
          <Image
            className="min-[600px]:hidden"
            priority
            src={logoMobile}
            alt="TMDB logo"
            width={55}
            height={40}
          />
          <ul className="flex items-center max-[900px]:hidden">
            <div className="group">
              <li className="text-white p-2 mr-[14px] cursor-pointer">
                Movies
              </li>
              <div className="absolute w-[170px] top-[45px] hidden group-hover:md:block hover:md:block bg-white pt-2 pb-2 rounded-sm shadow-lg">
                <ul>
                  <Link href="/">
                    <li className="cursor-pointer p-2 py-1 px-5 hover:bg-ghost-white">
                      Popular
                    </li>
                  </Link>
                  <Link href="/upcoming">
                    <li className="cursor-pointer p-2 py-1 px-5 hover:bg-ghost-white">
                      Upcoming
                    </li>
                  </Link>
                  <Link href="/top_rated">
                    <li className="cursor-pointer p-2 py-1 px-5 hover:bg-ghost-white">
                      Top Rated
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <li className="text-white p-2 mr-[14px] cursor-pointer">
              TV Shows
            </li>
            <li className="text-white p-2 mr-[14px] cursor-pointer">Shows</li>
            <li className="text-white p-2 mr-[14px] cursor-pointer">More</li>
          </ul>
        </div>
        <div className="flex h-full max-[900px]:w-[33%] max-[900px]:justify-end">
          <ul className="flex items-center max-[900px]:hidden">
            <li className="text-white">
              <Image src={plusIcon} alt="Plus icon" width={22} height={22} />
            </li>
            <li className="text-white text-sm ml-[30px] px-1 py-1 border rounded-sm hover:bg-white hover:text-oxford-blue">
              EN
            </li>
            <li className="text-white ml-[30px]">Login</li>
            <li className="text-white ml-[30px] cursor-pointer">Join TMDB</li>
            <li className="text-white ml-[30px]">
              <Image
                src={searchIcon}
                alt="Search icon"
                width={30}
                height={30}
              />
            </li>
          </ul>
          <ul className="flex items-center min-[901px]:hidden">
            <li className="text-white">
              <Image
                className="text-color"
                src={userIcon}
                alt="User icon"
                width={25}
                height={25}
              />
            </li>
            <li className="ml-[14px] text-white min-[600px]:ml-[30px]">
              <Image
                src={searchIcon}
                alt="Search icon"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-full h-[100svh] bg-[white]/0'
            : 'fixed left-[-100%] top-0 w-[100%] h-[100svh] bg-[black]/0'
        }
        onClick={() => setNav(false)}
      >
        <div
          className={
            nav
              ? `fixed p-5 h-[100vh] w-[55%] min-[500px]:w-[45%] min-[600px]:w-[35%] min-[800px]:w-[30%] left-0 top-[64px] backdrop-blur-lg bg-oxford-blue/90 ease-in duration-[300ms]`
              : 'fixed p-5 h-[100vh] w-[55%] min-[500px]:w-[45%] min-[600px]:w-[35%] min-[800px]:w-[30%] left-[-100%] top-[64px] backdrop-blur-lg bg-oxford-blue/90  ease-in duration-[300ms]'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="mb-10">
            <li className="flex text-xl text-white font-semibold mb-4 cursor-pointer">
              Movies
            </li>
            <ul className="pl-8">
              <li className="flex text-white font-normal mb-4 cursor-pointer">
                Popular
              </li>
              <li className="flex text-white font-normal mb-4 cursor-pointer">
                Upcoming
              </li>
              <li className="flex text-white font-normal mb-4 cursor-pointer">
                Top Rated
              </li>
            </ul>
            <li className="flex text-xl text-white font-semibold mb-4 cursor-pointer">
              TV Shows
            </li>
            <li className="flex text-xl text-white font-semibold mb-4 cursor-pointer">
              People
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              Contribution Bible
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              Discussions
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              LeaderBoard
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              API
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              Support
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              About
            </li>
            <li className="flex text-white/60 text-normal mb-4 cursor-pointer">
              Login
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
