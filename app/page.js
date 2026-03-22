'use client';
import { useRef, useState } from 'react';

import Loader from '../components/Loader';
import MusicPlayer from '../components/MusicPlayer';
import Florals from '../components/Florals';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import Story from '../components/Story';
import Events from '../components/Events';
import EndBanner from '../components/EndBanner';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const musicRef = useRef(null);

  const handleEnter = () => {
    setLoading(false);

    // 🎵 start music immediately after loader click
    setTimeout(() => {
      musicRef.current?.playMusic();
    }, 100);
  };

  return (
    <>
      {loading && <Loader onComplete={handleEnter} />}

      {!loading && (
        <>
          <MusicPlayer ref={musicRef} />
          <Florals />
          <Hero />
          <Countdown />
          <Events />
          <Story />
          <EndBanner />
        </>
      )}
    </>
  );
}
