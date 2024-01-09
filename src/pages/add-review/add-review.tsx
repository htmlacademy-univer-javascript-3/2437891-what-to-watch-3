import { Link, useParams } from 'react-router-dom';
import { Logo } from '../../components/logo';
import { UserBlock } from '../../components/user-block';
import { ReviewForm } from './review-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFilmInfo } from '../../store/api-actions';
import { NotFound } from '../not-found/not-found';
import { Loading } from '../../components/loading';
import { FilmInfo } from '../../types';

export function AddReview() {
  const { id } = useParams();
  const film = useAppSelector((state) => state.currentFilm as FilmInfo | null);
  const isDataLoading = useAppSelector((state) => state.isDataLoading as boolean);
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    if (id === undefined) {
      return;
    }

    dispatch(fetchFilmInfo({id: id, isEndOfDataLoading: true}));
  }, [dispatch, id]);

  if (isDataLoading) {
    return <Loading/>;
  } else if (id === undefined || !film) {
    return <NotFound/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film?.backgroundImage}
            alt={film?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={`${film.name} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <ReviewForm/>
    </section>
  );
}
