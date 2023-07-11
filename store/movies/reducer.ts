import { Result } from '@/interfaces';
import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, nextPage } from './actions';

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
