import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoPlayer } from './video-player';
import { Film } from '../../types';

export type CardInfo = {
  id: number;
  title: string;
  imagePath: string;
  videoPath: string;
  genre: string;
}

export type SmallFilmCardProps = {
  film: Film;
  setActiveCardId: React.Dispatch<React.SetStateAction<string>>;
}

export function SmallFilmCard({film, setActiveCardId}: SmallFilmCardProps) {
  const [isVideoPlayingNeeded, setIsVideoPlayingNeeded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const timeout = 1000;

  useEffect(() => {
    let isUpdateNeeded = true;

    if (isVideoPlayingNeeded) {
      setTimeout(() => isUpdateNeeded && setIsVideoPlaying(true), timeout);
    }

    return () => {
      isUpdateNeeded = false;
    };
  }, [isVideoPlayingNeeded]);

  const onMouseOver = () => {
    setActiveCardId(film.id);
    setIsVideoPlayingNeeded(true);
  };

  const onMouseLeave = () => {
    setIsVideoPlayingNeeded(false);
    setIsVideoPlaying(false);
  };

  return (
    <Link
      to={`/films/${film.id}`}
      className="small-film-card__link"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <VideoPlayer
        src={film.previewVideoLink}
        poster={film.previewImage}
        muted
        isPlaying={isVideoPlaying}
        name={film.name}
      />
    </Link>
  );
}
