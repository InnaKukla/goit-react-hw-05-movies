/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { GoToBack } from 'components/SharedLayout/SharedLayout.styled';
import { useEffect, useState } from 'react';

import { Link, Outlet, useParams } from 'react-router-dom';
import notImg from 'img/notFoto.png';

import { fetchMoviesById } from 'services/apiMovies';
import {
  FilmGenresItem,
  FilmGenresList,
  FilmImg,
  FilmOverview,
  FilmTitle,
  FilmUserScore,
  FilmWrap,
  MoreInfoWrap,
  MoreInfoWrapTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const params = useParams();
  const { movieId } = params;
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetchMoviesById(movieId).then(result => {
      setFilm(result);
    });
  }, [movieId]);

  if (!film) {
    return;
  }
  return (
    <>
      <GoToBack to={`/`}>---go to back</GoToBack>
      <FilmWrap key={film.id}>
        <div>
          <FilmImg
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : notImg
            }
            alt={film.title}
          />
        </div>

        <div>
          <FilmTitle>{film.original_title}</FilmTitle>
          <FilmUserScore>
            {' '}
            User Score: <span>{Math.round(film.vote_average)}</span>%
          </FilmUserScore>

          <h2>Overview</h2>
          <FilmOverview>{film.overview}</FilmOverview>
          <h2>Genres</h2>
          <FilmGenresList>
            {film.genres.map(genre => (
              <FilmGenresItem key={genre.id}>{genre.name}</FilmGenresItem>
            ))}
          </FilmGenresList>
          <MoreInfoWrapTitle>Additional information </MoreInfoWrapTitle>
          <MoreInfoWrap>
            <ul>
              <Link to="cast">CAST</Link>
              <Link to="reviews">REVIEWS</Link>
            </ul>
          </MoreInfoWrap>
        </div>
      </FilmWrap>
      <Outlet />
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  result: PropTypes.array.isRequired,
  movieId: PropTypes.number.isRequired,
  film: PropTypes.objectOf({
    original_title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genre: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};
