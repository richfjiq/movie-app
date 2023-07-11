import { Cast, Details, Genres, Images, Movies } from '@/interfaces';

export const fetchData = async (category: string, key: string) => {
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${key}`
  );
  const genres = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en`
  );
  const data: Movies = await movies.json();
  const genreData: Genres = await genres.json();
  const genreArray = genreData.genres;

  const moviesData = data.results.map((movie) => {
    const genresId = movie.genre_ids;
    let string: string = '';

    genresId.map((genre, i) => {
      const fromArray = genreArray.filter((g) => g.id === genre);
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

  return moviesData;
};

export const fetchMovieDetails = async (movieId: string, key: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`
  );
  const movieDetails: Details = await res.json();

  return movieDetails;
};

export const fetchCast = async (movieId: string, key: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
  );
  const movieCast: Cast = await res.json();

  return movieCast.cast;
};
