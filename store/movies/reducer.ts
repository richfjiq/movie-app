import { Genre, Result } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { fetchGenres, fetchMovies, nextPage } from './actions';

export interface MoviesState {
  loading: boolean;
  error: string | null;
  popular: Result[];
  upcoming: Result[];
  top_rated: Result[];
  popular_page: number;
  upcoming_page: number;
  top_rated_page: number;
  next_page: boolean;
  genres: Genre[];
}

const initialState: MoviesState = {
  loading: false,
  error: null,
  popular: [],
  upcoming: [],
  top_rated: [],
  popular_page: 1,
  upcoming_page: 1,
  top_rated_page: 1,
  next_page: false,
  genres: [],
};

const moviesStore = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(nextPage, (state, { payload }) => {
      state[`${payload.category}_page`] = payload.page;
      state.next_page = true;
    });
    builder.addCase(fetchGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGenres.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.genres = payload ? payload : [];
    });
    builder.addCase(fetchGenres.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state[payload.category] = [...state[payload.category], ...payload.movies];
      state.loading = false;
      state.next_page = false;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      state.loading = false;
      state.next_page = false;
      state.error = payload as string;
    });
  },
});

export default moviesStore.reducer;
