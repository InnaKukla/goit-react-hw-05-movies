// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMoviesCredits } from 'services/apiMovies';
import {
  CastCharacter,
  CastCharacterInfo,
  CastImg,
  CastInfo,
  CastItem,
  CastList,
  CastName,
} from './Cast.styled';
import notImg from 'img/imageNotFound.png';

const Cast = () => {
  const params = useParams();
  const { movieId } = params;
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(movieId).then(response => {
      setCredits(response.cast);
    });
  }, [movieId]);

  return (
    <div>
      <CastList>
        {credits.map(({ profile_path, name, original_name, character }) => (
          <CastItem>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : notImg
              }
              alt={`${name}`}
            />
            <CastInfo>
              <CastName>{original_name}</CastName>
              <CastCharacter>
                Character: <CastCharacterInfo>{character}</CastCharacterInfo>
              </CastCharacter>
            </CastInfo>
          </CastItem>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  profile_path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  original_name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  response: PropTypes.array.isRequired,
};
