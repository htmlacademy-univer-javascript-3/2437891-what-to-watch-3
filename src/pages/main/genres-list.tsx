import { GenreItem, GenreTypeEnum } from './genre-item';

export function GenresList() {
  return (
    <ul className="catalog__genres-list">
      {Object.values(GenreTypeEnum).map((genre) => genre as GenreTypeEnum)
        .map((genre) =>(
          <GenreItem genre={genre} key={genre}/>))}
    </ul>
  );
}
