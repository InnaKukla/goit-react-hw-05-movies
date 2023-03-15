import PropTypes from 'prop-types';
import {
  HomeTitle,
  MovieImg,
  MovieInfo,
  MovieItem,
  MoviesList,
  MovieTitle,
} from 'components/Movies/Movies.styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from 'services/apiMovies';
import notImg from 'img/notFoto.png';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchPopularMovies().then(data => {
      const popularMovie = data.results;
      setMovies(popularMovie);
    });
  }, []);
  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList>
        {movies.map(
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
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_count: PropTypes.number.isRequired,
  movieId: PropTypes.number.isRequired,
};
