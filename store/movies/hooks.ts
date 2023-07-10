import { shallowEqual } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import { Category, fetchMovies as fetchMoviesAction } from './actions';
import { useCallback } from 'react';

export const useMovies = () => {
  const moviesState = useAppSelector(
    (state: RootState) => state.movies,
    shallowEqual
  );
  const dispatch = useAppDispatch();

  const fetchMovies = useCallback(
    async ({ category, page }: { category: Category; page: number }) => {
      await dispatch(fetchMoviesAction({ category, page }));
    },
    [dispatch]
  );

  return {
    ...moviesState,
    fetchMovies,
  };
};
