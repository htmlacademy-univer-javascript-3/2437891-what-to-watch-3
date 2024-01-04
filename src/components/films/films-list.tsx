import { useState } from 'react';
import { SmallFilmCard } from './small-film-card';
import { Film } from '../../types';

export type FilmsListProps = {
    films: Film[];
}

export function FilmsList({films} : FilmsListProps) {
  const [, setActiveCardId] = useState('');
  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.name} film={film} setActiveCardId={setActiveCardId}/>)}
    </div>
  );
}
