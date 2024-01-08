import { useAppSelector } from '../../../hooks';
import { Review } from './review';

export function Comments() {
  const comments = useAppSelector((state) => state.comments);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => <Review key={comment.user} comment={comment}/>)}
      </div>
    </div>
  );
}
