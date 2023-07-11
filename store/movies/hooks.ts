import { shallowEqual } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../hooks';
import { RootState } from '../store';
import {
  Category,
  fetchMovies as fetchMoviesAction,
  nextPage as nextPageAction,
} from './actions';
import { useCallback } from 'react';

export const useMovies = () => {
  const moviesState = useAppSelector(
    (state: RootState) => state.movies,
    shallowEqual
  );
  const dispatch = useAppDispatch();

  const nextPageFn = useCallback(
    ({ category, page }: { category: Category; page: number }) => {
      dispatch(nextPageAction({ category, page }));
    },
    [dispatch]
  );
  const fetchMovies = useCallback(
    ({ category, page }: { category: Category; page: number }) => {
      dispatch(fetchMoviesAction({ category, page }));
    },
    [dispatch]
  );

  return {
    ...moviesState,
    fetchMovies,
    nextPageFn,
  };
};
