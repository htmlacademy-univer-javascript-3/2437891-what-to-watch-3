import { useEffect } from 'react';
import { FilmsList } from '../../components/films/films-list';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { UserBlock } from '../../components/user-block';
import { useAppSelector } from '../../hooks';
import { Film } from '../../types';
import { fetchMyFilms } from '../../store/api-actions';

export type MyListProps = {
  films: Film[];
}

export function MyList() {
  const myFilms = useAppSelector((state) => state.myFilms as Film[]);
  const myFilmsCount = useAppSelector((state) => state.myFilmsCount as number);

  useEffect(() => () => {
    fetchMyFilms({isEndOfDataLoading: true});
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
      My list <span className="user-page__film-count">{myFilmsCount}</span>
        </h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={myFilms}/>
      </section>
      <Footer/>
    </div>
  );
}
