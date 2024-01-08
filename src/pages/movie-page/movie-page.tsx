import { useParams } from 'react-router-dom';
import { FilmsList } from '../../components/films/films-list';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { UserBlock } from '../../components/user-block';
import { MovieTabs } from './movie-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchComments, fetchFilmInfo, fetchSimilarFilms } from '../../store/api-actions';
import { Loading } from '../../components/loading';
import { NotFound } from '../not-found/not-found';
import { AddReviewButton } from './add-review-button';

export function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  useEffect(() => () => {
    if (id === undefined) {
      return;
    }

    dispatch(fetchFilmInfo(id));
    dispatch(fetchSimilarFilms(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  if (isDataLoading) {
    return <Loading/>;
  } else if (!currentFilm) {
    return <NotFound/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={currentFilm?.backgroundImage}
              alt={currentFilm?.name}
            />
          </div>
          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title"></h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <AddReviewButton/>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm?.posterImage}
                alt={'poster'}
                width={218}
                height={327}
              />
            </div>
            <MovieTabs/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similarFilms}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
