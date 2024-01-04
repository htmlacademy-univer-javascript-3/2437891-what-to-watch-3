import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  muted: boolean;
  isPlaying: boolean;
  name: string;
}

export function VideoPlayer({src, poster, muted, isPlaying, name}: VideoPlayerProps) {
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
    <>
      <div style={{ width: '19vw', height: '19vh' }}>
        <video
          className='player__video'
          ref={videoRef}
          src={src}
          poster={poster}
          muted={muted}
        />
      </div>
      <div style={{fontSize: '65%', marginBottom: '15%', maxWidth: '19vw'}}>
        <p>{name}</p>
      </div>
    </>
  );
}
