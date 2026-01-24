'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Florals() {
  const leftFloral = useRef(null);
  const rightFloral = useRef(null);

  useEffect(() => {
    // left floral gentle movement
    gsap.to(leftFloral.current, {
      y: -40,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // right floral gentle movement
    gsap.to(rightFloral.current, {
      y: 40,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <>
      <img
        ref={leftFloral}
        src="/floral-left.png"
        className="floral floral-left"
        alt=""
      />
      <img
        ref={rightFloral}
        src="/floral-right.png"
        className="floral floral-right"
        alt=""
      />
    </>
  );
}
