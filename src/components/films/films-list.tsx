import { useState } from 'react';
import { CardInfo, SmallFilmCard } from './small-film-card';

export type FilmsListProps = {
    films: CardInfo[];
}

export function FilmsList({films} : FilmsListProps) {
  const [activeCardId, setActiveCardId] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.title} info={film} setActiveCardId={setActiveCardId}/>)}
    </div>
  );
}
