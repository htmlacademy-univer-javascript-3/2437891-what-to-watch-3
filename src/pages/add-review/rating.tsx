export type RatingProps = {
    starsCount: number;
    setRating: (num: number) => void;
}

export function Rating({starsCount, setRating}: RatingProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${starsCount}`}
        type="radio"
        name="rating"
        defaultValue={starsCount}
        onClick={() => setRating(starsCount)}
      />
      <label className="rating__label" htmlFor={`star-${starsCount}`}>
        Rating {starsCount}
      </label>
    </>
  );
}
