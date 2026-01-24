'use client';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import gsap from 'gsap';

const MusicPlayer = forwardRef(function MusicPlayer(_, ref) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current && !playing) {
      audioRef.current.volume = 0;
      audioRef.current.play();
      gsap.to(audioRef.current, { volume: 0.4, duration: 2 });
      setPlaying(true);
    }
  };

  const stopMusic = () => {
    gsap.to(audioRef.current, {
      volume: 0,
      duration: 1,
      onComplete: () => {
        audioRef.current.pause();
        setPlaying(false);
      },
    });
  };

  const toggleMusic = () => {
    playing ? stopMusic() : playMusic();
  };

  // expose playMusic to parent
  useImperativeHandle(ref, () => ({
    playMusic,
  }));

  return (
    <>
      <audio ref={audioRef} loop src="/music/wedding.mp3" />
      <button className="music-btn" onClick={toggleMusic}>
        {playing ? '🔊' : '🔇'}
      </button>
    </>
  );
});

export default MusicPlayer;
