import { Link, useNavigate, useParams } from 'react-router-dom';
import { FilmsList } from '../../components/films/films-list';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { UserBlock } from '../../components/user-block';
import { MovieTabs } from './movie-tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { changeFavoriteStatus, fetchComments, fetchFilmInfo, fetchMyFilms, fetchSimilarFilms } from '../../store/api-actions';
import { Loading } from '../../components/loading';
import { NotFound } from '../not-found/not-found';
import { AddReviewButton } from './add-review-button';
import { APIRoute, AuthorizationStatus } from '../../const';
import { MyListButton } from '../../components/my-list-button';
import { setMyFilmsCount } from '../../store/actions';

export function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isFavorite, setFavorite] = useState(false);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const myFilmsCount = useAppSelector((state) => state.myFilmsCount);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => () => {
    if (id === undefined) {
      return;
    }

    dispatch(fetchFilmInfo({id, isEndOfDataLoading: false}));
    dispatch(fetchSimilarFilms({id, isEndOfDataLoading: false}));
    dispatch(fetchComments({id, isEndOfDataLoading: false}));
    dispatch(fetchMyFilms({isEndOfDataLoading: true}));
  }, [dispatch, id]);

  useEffect(() => () => {
    if (currentFilm) {
      setFavorite(currentFilm.isFavorite);
      setLoading(false);
    }
  }, [currentFilm]);

  const onClickMyList = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(APIRoute.Login);
    } else {
      if (currentFilm === null) {
        return;
      }

      dispatch(changeFavoriteStatus({id: currentFilm.id, status: isFavorite ? 0 : 1}));
      if (isFavorite) {
        dispatch(setMyFilmsCount(myFilmsCount - 1));
      } else {
        dispatch(setMyFilmsCount(myFilmsCount + 1));
      }
      setFavorite(!isFavorite);
    }
  };

  if ((isDataLoading || isLoading) && !currentFilm) {
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
                <Link to={`/player/${currentFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton onClickMyList={onClickMyList} isFavorite={isFavorite} myFilmsCount={myFilmsCount}/>
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
