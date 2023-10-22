export type CardInfo = {
    title: string;
    imagePath: string;
}

export function SmallFilmCard(cardInfo: CardInfo) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={cardInfo.imagePath}
          alt={cardInfo.title}
          width="{280}"
          height="{175}"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {cardInfo.title}
        </a>
      </h3>
    </article>
  );
}
