import { useAppSelector } from '../../hooks';

export function ReviewFormError() {
  const error = useAppSelector((state) => state.error);

  if (error === null) {
    return null;
  }

  return (
    <div className="review-form__error">
      <p>Commemt must be longer than or equal to 50 characters</p>
    </div>
  );
}
