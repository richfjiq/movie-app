import { Movies } from '@/interfaces';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

const FETCH_MOVIES = 'movies/FETCH_MOVIES';

export type Category = 'popular' | 'upcoming' | 'topRated';

export const fetchMovies = createAsyncThunk(
  FETCH_MOVIES,
  async (
    { category, page }: { category: Category; page: number },
    { rejectWithValue }
  ) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${page}`
      );

      const data: Movies = await res.json();

      return {
        category,
        movies: data.results,
      };
    } catch (error) {
      rejectWithValue('Server Error.');
    }
  }
);
