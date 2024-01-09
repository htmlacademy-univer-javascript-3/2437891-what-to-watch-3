import { Link, useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

export function AddReviewButton() {
  const { id } = useParams();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus as AuthorizationStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth || id === undefined) {
    return null;
  }

  return (
    <Link to={`/films/${id}/review`} className="btn film-card__button">Add Review</Link>
  );
}
