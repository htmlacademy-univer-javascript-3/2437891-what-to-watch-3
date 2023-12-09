import { useState } from 'react';
import { Rating } from './rating';


export function ReviewForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setRating] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setText] = useState('');
  const ratingRange = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
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
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
