import { useAppSelector } from '../../../hooks';

export function Overview() {
  const film = useAppSelector((state) => state.currentFilm);

  const getRatingLevel = (rating: number) => {
    if (rating < 3) {
      return 'Bad';
    }
    if (rating < 5) {
      return 'Normal';
    }
    if (rating < 8) {
      return 'Good';
    }
    if (rating < 10) {
      return 'Very good';
    }
    return 'Awesome';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film?.rating as number)}</span>
          <span className="film-rating__count">{`${film?.scoresCount as number} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p> {film?.description} </p>
        <p className="film-card__director">
          <strong>{`Director: ${film?.director as string}`}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            {`Starring: ${film?.starring.join(', ') as string} and other`}
          </strong>
        </p>
      </div>
    </>
  );
}
