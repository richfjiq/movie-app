'use client';
import { Category, useMovies } from '@/store';
import { FC } from 'react';

interface ButtonProps {
  category: Category;
}

const LoadMoreButton: FC<ButtonProps> = ({ category }) => {
  const { nextPageFn, popular_page, upcoming_page, top_rated_page } =
    useMovies();

  const handleButtonClick = () => {
    let currentPage = 1;

    switch (category) {
      case 'popular':
        currentPage = popular_page;
        break;
      case 'upcoming':
        currentPage = upcoming_page;
        break;
      default:
        currentPage = top_rated_page;
        break;
    }

    nextPageFn({ category, page: currentPage + 1 });
  };

  return (
    <button
      onClick={handleButtonClick}
      className="w-full h-[50px] bg-cyan rounded-lg text-2xl font-bold text-white mb-[30px]"
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
