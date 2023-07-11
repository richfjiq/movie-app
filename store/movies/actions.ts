import { Genres, Movies } from '@/interfaces';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';
import { RootState, store } from '../store';
import { shallowEqual } from 'react-redux';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

const FETCH_MOVIES = 'movies/FETCH_MOVIES';
const NEXT_PAGE = 'movies/NEXT_PAGE';
const FETCH_GENRES = 'movies/FETCH_GENRES';

export type Category = 'popular' | 'upcoming' | 'top_rated';

export const nextPage = createAction(
  NEXT_PAGE,
  ({ category, page }: { category: Category; page: number }) => {
    return {
      payload: {
        category,
        page,
      },
    };
  }
);

export const fetchGenres = createAsyncThunk(
  FETCH_GENRES,
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      );

      const data: Genres = await res.json();
      return data.genres;
    } catch (error) {
      rejectWithValue('Server Error.');
    }
  }
);

export const fetchMovies = createAsyncThunk(
  FETCH_MOVIES,
  async (
    { category, page }: { category: Category; page: number },
    { rejectWithValue, getState }
  ) => {
    const store = getState() as RootState;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${page}`
      );

      const data: Movies = await res.json();

      const moviesData = data.results.map((movie) => {
        const genresId = movie.genre_ids;
        let string: string = '';

        genresId.map((genre, i) => {
          const fromArray = store.movies.genres.filter((g) => g.id === genre);
          if (genresId.length - 1 === i) {
            string += `${fromArray[0].name}`;
          } else {
            string += `${fromArray[0].name}, `;
          }
        });

        return {
          ...movie,
          genre_strings: string,
        };
      });

      return {
        category,
        movies: moviesData,
      };
    } catch (error) {
      rejectWithValue('Server Error.');
    }
  }
);
