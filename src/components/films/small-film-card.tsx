import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoPlayer } from './video-player';

export type CardInfo = {
  id: number;
  title: string;
  imagePath: string;
  videoPath: string;
}

export type SmallFilmCardProps = {
  info: CardInfo;
  setActiveCardId: React.Dispatch<React.SetStateAction<number>>;
}

export function SmallFilmCard({info, setActiveCardId}: SmallFilmCardProps) {
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
    setActiveCardId(info.id);
    setIsVideoPlayingNeeded(true);
  };

  const onMouseLeave = () => {
    setIsVideoPlayingNeeded(false);
    setIsVideoPlaying(false);
  };

  return (
    <Link
      to={`/films/${info.id}`}
      className="small-film-card__link"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <VideoPlayer
        src={info.videoPath}
        poster={info.imagePath}
        muted
        isPlaying={isVideoPlaying}
      />
    </Link>
  );
}
