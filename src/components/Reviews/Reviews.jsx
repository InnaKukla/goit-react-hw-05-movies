import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/apiMovies';
import {
  ReviewsAuthor,
  ReviewsAuthorName,
  ReviewsContext,
  ReviewsWrap,
} from './Reviews.styled';

const Reviews = () => {
  const params = useParams();
  const { movieId } = params;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(response => {
      setReviews(response.results);
    });
  }, [movieId]);

  return (
    <div>
      <ReviewsWrap>
        {reviews.length > 0 ? (
          reviews.map(({ author, content }) => (
            <li>
              <div>
                <ReviewsAuthor>
                  Author: <ReviewsAuthorName>{author}</ReviewsAuthorName>
                </ReviewsAuthor>
                <ReviewsContext> {content}</ReviewsContext>
              </div>
            </li>
          ))
        ) : (
          <p>We do not have any reviews</p>
        )}
      </ReviewsWrap>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.number.isRequired,
  response: PropTypes.array.isRequired,
  reviews: PropTypes.arrayOf({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
