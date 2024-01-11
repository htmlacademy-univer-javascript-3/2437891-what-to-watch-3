import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { FilmsList } from '../../components/films/films-list';
import { UserBlock } from '../../components/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GenresList } from './genres-list';
import { useEffect, useState } from 'react';
import { setGenre, setMyFilmsCount, showDefaultCountFilms, showMoreFilms } from '../../store/actions';
import { ShowMore } from './show-more';
import { changeFavoriteStatus, fetchFilms, fetchMyFilms, fetchPromo } from '../../store/api-actions';
import { Loading } from '../../components/loading';
import { Link, useNavigate } from 'react-router-dom';
import { APIRoute, AuthorizationStatus } from '../../const';

export function Main() {
  const filmsToShowCount = useAppSelector((state) => state.filmsCount);
  const filmsList = useAppSelector((state) => state.films);
  const promo = useAppSelector((state) => state.promo);
  const myFilmsCount = useAppSelector((state) => state.myFilmsCount);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickMyList = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(APIRoute.Login);
    } else {
      if (promo === null) {
        return;
      }

      dispatch(changeFavoriteStatus({id: promo.id, status: isFavorite ? 0 : 1}));
      if (isFavorite) {
        dispatch(setMyFilmsCount(myFilmsCount - 1));
      } else {
        dispatch(setMyFilmsCount(myFilmsCount + 1));
      }
      setFavorite(!isFavorite);
    }
  };

  useEffect(() => () => {
    dispatch(fetchPromo());
    dispatch(fetchFilms());
    dispatch(fetchMyFilms({isEndOfDataLoading: true}));
    dispatch(setGenre('All genres'));
    dispatch(showDefaultCountFilms());
  }, [dispatch]);

  useEffect(() => () => {
    if (promo) {
      setFavorite(promo.isFavorite);
    }
  }, [promo]);

  if (promo === null) {
    return <Loading/>;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={promo.backgroundImage}
            alt={promo.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promo.posterImage}
                alt={promo.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`/player/${promo.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--play film-card__button" type="button" onClick={onClickMyList}>
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    {
                      (authorizationStatus === AuthorizationStatus.Auth ? isFavorite : false)
                        ? (<use xlinkHref="#in-list"/>)
                        : (<use xlinkHref="#add"/>)
                    }
                  </svg>
                  <span>My List</span>
                  <span className="film-card__count">{authorizationStatus === AuthorizationStatus.Auth ? myFilmsCount : 0}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList/>
          <FilmsList films={filmsList.slice(0, filmsToShowCount)}/>
          {filmsToShowCount >= filmsList.length ? null :
            <ShowMore onClickHandler={()=>{
              dispatch(showMoreFilms());
            }}
            />}
        </section>
        <Footer/>
      </div>
    </>
  );
}
