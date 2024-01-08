import { useState } from 'react';
import { MovieTab, MovieTabEnum } from './movie-tab';
import { Details } from './tabs/details';
import { Comments } from './tabs/comments';
import { Overview } from './tabs/overview';

export function MovieTabs() {

  const [movieTab, setMovieTab] = useState<MovieTabEnum>(MovieTabEnum.Overview);
  const getCurrentTab = (tabType: MovieTabEnum) => {
    switch (tabType) {
      case MovieTabEnum.Overview:
        return <Overview/>;
      case MovieTabEnum.Details:
        return <Details/>;
      case MovieTabEnum.Review:
        return <Comments/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(MovieTabEnum).map((tab) => tab as MovieTabEnum)
            .map((tab) =>
              <MovieTab key={tab} type={tab} onClick={setMovieTab} isActive={movieTab === tab}/>
            )}
        </ul>
      </nav>
      {getCurrentTab(movieTab)}
    </div>
  );
}
