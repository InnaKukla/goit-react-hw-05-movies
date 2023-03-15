import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'services/apiMovies';
import notImg from 'img/notFoto.png';
import {
  MovieForm,
  MovieImg,
  MovieInfo,
  MovieItem,
  MoviesList,
  MovieTitle,
} from './Movies.styled';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handlerButton = e => {
    e.preventDefault();

    setQuery(e.target.name.value);
    setSearchParams({ query: e.target.name.value.trim().toLowerCase() });
  };

  useEffect(() => {
    fetchSearchMovies(query).then(response => {
      setSearchFilms(response.results);
    });
  }, [query]);
  return (
    <>
      <MovieForm onSubmit={handlerButton}>
        <input type="text" name="name" autoComplete="off" />
        <button type="submit">Search</button>
      </MovieForm>

      <MoviesList>
        {searchFilms.map(
          ({
            id,
            original_title,
            poster_path,
            title,
            release_date,
            vote_count,
          }) => (
            <MovieItem key={id}>
              <Link to={`/movies/${id}`}>
                <MovieImg
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : notImg
                  }
                  alt={title}
                />
                <MovieTitle>{original_title}</MovieTitle>
                <MovieInfo>
                  <p>
                    Release Date: <span> {release_date.split('-')[0]}</span>{' '}
                  </p>
                  <p>
                    Vote count: <span> {vote_count}</span>{' '}
                  </p>
                </MovieInfo>
              </Link>
            </MovieItem>
          )
        )}
      </MoviesList>
    </>
  );
};

export default Movies;

Movies.propTypes = {
  handlerButton: PropTypes.func.isRequired,
  searchFilms: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_count: PropTypes.number.isRequired,
  }),
};
