import { Link } from 'react-router-dom';

export type CardInfo = {
  id: number;
  title: string;
  imagePath: string;
}

export type SmallFilmCardProps = {
  info: CardInfo;
  setActiveCardId: React.Dispatch<React.SetStateAction<number>>;
}

export function SmallFilmCard({info, setActiveCardId}: SmallFilmCardProps) {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setActiveCardId(info.id)}>
      <div className="small-film-card__image">
        <img
          src={info.imagePath}
          alt={info.title}
          width="{280}"
          height="{175}"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${info.id}`} className="small-film-card__link">{info.title}</Link>
      </h3>
    </article>
  );
}
