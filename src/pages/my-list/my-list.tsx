import { FilmsList } from '../../components/films/films-list';
import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { UserBlock } from '../../components/user-block';
import { Film } from '../../types';

export type MyListProps = {
  films: Film[];
}

export function MyList({films}: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
      My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>
      <Footer/>
    </div>
  );
}
