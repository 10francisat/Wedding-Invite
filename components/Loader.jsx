'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const zoomTween = useRef(null);

  useEffect(() => {
    // subtle zoom-in animation
    zoomTween.current = gsap.fromTo(
      loaderRef.current,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 10,
        ease: 'none',
      }
    );

    return () => {
      if (zoomTween.current) zoomTween.current.kill();
    };
  }, []);

  const handleEnter = () => {
    if (zoomTween.current) zoomTween.current.kill();

    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: onComplete,
    });
  };

  return (
    <div
      ref={loaderRef}
      onClick={handleEnter}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundImage: 'url(/loader.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        willChange: 'transform',
      }}
    >
      {/* Tap hint */}
      <p
        style={{
          position: 'absolute',
          bottom: 40,
          width: '100%',
          textAlign: 'center',
          fontSize: 12,
          letterSpacing: 1,
          opacity: 0.6,
        }}
      >
        TAP TO ENTER
      </p>
    </div>
  );
}
