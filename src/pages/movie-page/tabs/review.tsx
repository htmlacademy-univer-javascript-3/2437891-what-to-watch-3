import { Comment } from '../../../types';

type CommentProps = {
  comment: Comment;
}

export function Review({comment}: CommentProps) {
  const date = new Date(comment.date);

  function getMonthName(dt: Date): string {
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dt);
    return monthName;
  }

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment.comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{comment.user}</cite>
          <time className="review__date" dateTime={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}>
            {`${getMonthName(date)} ${date.getDate()}, ${date.getFullYear()}`}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}
