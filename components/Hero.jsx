'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }, heroRef);

    return () => ctx.revert(); // ✅ critical
  }, []);

  return (
    <section ref={heroRef} className="section hero-section">
      <p style={{ letterSpacing: 3, fontSize: 12 }}>SAVE THE DATE</p>
      <h1
        style={{
          fontFamily: 'Great Vibes',
          fontSize: 72,
          margin: '20px 0',
        }}
      >
        Theresa & Suman
      </h1>
      <p style={{ fontSize: 18 }}>15 · 04 · 2026</p>
    </section>
  );
}
