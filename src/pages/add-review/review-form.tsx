import { useEffect, useState } from 'react';
import { Rating } from './rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { createComment } from '../../store/api-actions';
import { ReviewFormError } from './review-form-error';


export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const ratingRange = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const isCommentCreated = useAppSelector((state) => state.isCommentCreated);
  const filmId = useAppSelector((state) => state.currentFilm?.id) as string;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    if (isCommentCreated) {
      navigate(`/films/${filmId}`);
    }
  }, [navigate, filmId, isCommentCreated]);

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {ratingRange.map((i) => <Rating key={i} starsCount={i} setRating={setRating}/>)}
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            defaultValue={''}
            onChange={(evt) => setText(evt.target.value)}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!rating || !text || isDataLoading} onClick={(evt) => {
              evt.preventDefault();
              dispatch(createComment({rating, comment: text, filmId}));
            }}
            >
              Post
            </button>
          </div>
        </div>
      </form>
      <ReviewFormError/>
    </div>
  );
}
