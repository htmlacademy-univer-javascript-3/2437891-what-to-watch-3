import { FilmsList } from '../../components/films/films-list';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { CardInfo } from '../../components/films/small-film-card';
import { UserBlock } from '../../components/user-block';
import { MovieTabs } from './movie-tabs';

export type FilmInfo = {
  title: string;
  imapePath: string;
  posterImagePath: string;
  genre: string;
  year: number;
}

export type MoviePageProps = {
  films: CardInfo[];
  filmInfo: FilmInfo;
}

export function MoviePage({films, filmInfo}: MoviePageProps) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={filmInfo.imapePath}
              alt={filmInfo.title}
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
                <span className="film-card__genre">{filmInfo.genre}</span>
                <span className="film-card__year">{filmInfo.year}</span>
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
                <a href="add-review.html" className="btn film-card__button">
              Add review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={filmInfo.posterImagePath}
                alt={`${filmInfo.title} poster`}
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
          <FilmsList films={films}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
