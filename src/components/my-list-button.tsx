type MyListButtonProps = {
  onClickMyList: () => void;
  isFavorite: boolean;
  myFilmsCount: number;
}

export function MyListButton({onClickMyList, isFavorite, myFilmsCount}: MyListButtonProps) {
  return (
    <button className="btn btn--play film-card__button" type="button" onClick={onClickMyList}>
      <svg viewBox="0 0 19 20" width={19} height={20}>
        {
          isFavorite
            ? (<use xlinkHref="#in-list"/>)
            : (<use xlinkHref="#add"/>)
        }
      </svg>
      <span>My List</span>
      <span className="film-card__count">{myFilmsCount}</span>
    </button>
  );
}
