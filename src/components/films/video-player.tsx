import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  muted: boolean;
  isPlaying: boolean;
}

export function VideoPlayer({src, poster, muted, isPlaying}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null){
      return;
    }

    if (isPlaying){
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      className='player__video'
      height='175'
      width='280'
      ref={videoRef}
      src={src}
      poster={poster}
      muted={muted}
    />
  );
}
