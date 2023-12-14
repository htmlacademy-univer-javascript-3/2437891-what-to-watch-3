import cn from 'classnames';
import { setGenre } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';

export enum GenreTypeEnum {
    AllGenres = 'All genres',
    Comedies = 'Comedies',
    Crime = 'Crime',
    Documentary = 'Documentary',
    Dramas = 'Dramas',
    Horror = 'Horror',
    KidsAndFamily = 'Kids & Family',
    Romance = 'Romance',
    SciFi = 'Sci-Fi',
    Thrillers = 'Thrillers'
}

type GenreItemProp = {
    genre: GenreTypeEnum;
}

export function GenreItem({genre}: GenreItemProp) {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  const changeGenreHandler = () => {
    dispatch(setGenre(genre));
  };
  return (
    <li className={cn(
      'catalog__genres-item',
      {'catalog__genres-item--active': activeGenre === genre})}
    >
      <Link
        to={'#'}
        className="catalog__genres-link"
        onClick={changeGenreHandler}
      >
        {genre}
      </Link>
    </li>
  );
}
