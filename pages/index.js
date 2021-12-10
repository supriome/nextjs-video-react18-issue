import { useRef } from 'react'

import VideoJS from '../components/VideoJS';
import styles from '../styles/Home.module.css'

export default function Home() {
  const playerRef = useRef(null);
  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    loop: true,
    muted: true,
    preload: true,
    controls: false,
    responsive: true,
    fluid: true,
    poster: '//vjs.zencdn.net/v/oceans.png',
    sources: [
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };
  return (
    <div className={styles.container}>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  )
}
