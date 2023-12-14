import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { FilmsList } from '../../components/films/films-list';
import { UserBlock } from '../../components/user-block';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { GenresList } from './genres-list';
import { useEffect } from 'react';
import { showDefaultCountFilms, showMoreFilms } from '../../store/action';
import { ShowMore } from './show-more';

export type PromoInfo = {
  title: string;
  genre: string;
  year: number;
  imapePath: string;
  posterImagePath: string;
}

export function Main(props: PromoInfo) {
  const filmsToShowCount = useAppSelector((state)=>(state.filmsCount));
  const filmsList = useAppSelector((state)=>(state.films));
  const dispatch = useAppDispatch();
  useEffect(() => () => {
    dispatch(showDefaultCountFilms());
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={props.imapePath}
            alt={props.title}
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
                src={props.posterImagePath}
                alt={props.title}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{props.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
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
