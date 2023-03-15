import PropTypes from 'prop-types';
const apiKey = '6804a755b6d8ca39f57235b79af1d744';
const baseUrl = 'https://api.themoviedb.org/3';
const popularMovie = '/discover/movie?sort_by=popularity.desc';

export const fetchPopularMovies = () => {
  return fetch(`${baseUrl}${popularMovie}&api_key=${apiKey}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Any movies didn't find`));
  });
};

export const fetchSearchMovies = query => {
  return fetch(
    `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Any movies didn't find`));
  });
};

export const fetchMoviesById = movieId => {
  return fetch(
    `${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Any movies didn't find`));
  });
};

export const fetchMoviesCredits = movie_id => {
  return fetch(
    `${baseUrl}/movie/${movie_id}/credits?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Any movies didn't find`));
  });
};

export const fetchMovieReviews = movie_id => {
  return fetch(
    `${baseUrl}/movie/${movie_id}/reviews?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Any movies didn't find`));
  });
};

fetchPopularMovies.propTypes = {
  popularMovie: PropTypes.string.isRequired,
  response: PropTypes.array.isRequired,
};

fetchSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  response: PropTypes.array.isRequired,
};

fetchMoviesById.propTypes = {
  movieId: PropTypes.number.isRequired,
  response: PropTypes.array.isRequired,
};
fetchMoviesCredits.propTypes = {
  movieId: PropTypes.number.isRequired,
  response: PropTypes.array.isRequired,
};
fetchMovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
  response: PropTypes.array.isRequired,
};
