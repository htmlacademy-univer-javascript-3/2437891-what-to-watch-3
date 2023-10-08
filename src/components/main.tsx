import SmallFilmCard from './small-film-card';

type PromoInfo = {
  title: string;
  genre: string;
  year: number;
  imapePath: string;
  posterImagePath: string;
}

function Main(props: PromoInfo) {
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
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width={63}
                  height={63}
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
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
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>
          <div className="catalog__films-list">
            <SmallFilmCard
              title='Fantastic Beasts: The Crimes of Grindelwald'
              imagePath='img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
            />
            <SmallFilmCard
              title='Bohemian Rhapsody'
              imagePath='img/bohemian-rhapsody.jpg'
            />
            <SmallFilmCard
              title='Macbeth'
              imagePath='img/macbeth.jpg'
            />
            <SmallFilmCard
              title='Aviator'
              imagePath='img/aviator.jpg'
            />
            <SmallFilmCard
              title='We need to talk about Kevin'
              imagePath='img/we-need-to-talk-about-kevin.jpg'
            />
            <SmallFilmCard
              title='What We Do in the Shadows'
              imagePath='img/what-we-do-in-the-shadows.jpg'
            />
            <SmallFilmCard
              title='Revenant'
              imagePath='img/revenant.jpg'
            />
            <SmallFilmCard
              title='Johnny English'
              imagePath='img/johnny-english.jpg'
            />
            <SmallFilmCard
              title='Shutter Island'
              imagePath='img/shutter-island.jpg'
            />
            <SmallFilmCard
              title='Pulp Fiction'
              imagePath='img/pulp-fiction.jpg'
            />
            <SmallFilmCard
              title='No Country for Old Men'
              imagePath='img/no-country-for-old-men.jpg'
            />
            <SmallFilmCard
              title='Snatch'
              imagePath='img/snatch.jpg'
            />
            <SmallFilmCard
              title='Moonrise Kingdom'
              imagePath='img/moonrise-kingdom.jpg'
            />
            <SmallFilmCard
              title='Seven Years in Tibet'
              imagePath='img/seven-years-in-tibet.jpg'
            />
            <SmallFilmCard
              title='Midnight Special'
              imagePath='img/midnight-special.jpg'
            />
            <SmallFilmCard
              title='War of the Worlds'
              imagePath='img/war-of-the-worlds.jpg'
            />
            <SmallFilmCard
              title='Dardjeeling Limited'
              imagePath='img/dardjeeling-limited.jpg'
            />
            <SmallFilmCard
              title='Orlando'
              imagePath='img/orlando.jpg'
            />
            <SmallFilmCard
              title='Mindhunter'
              imagePath='img/mindhunter.jpg'
            />
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
export type { PromoInfo };
