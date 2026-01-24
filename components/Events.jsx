'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const eventsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        eventsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: eventsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none', // animate once
          },
        }
      );
    }, eventsRef);

    return () => ctx.revert(); // 🔑 critical
  }, []);

  return (
  <section ref={eventsRef} className="section">
    <h2 style={{ fontSize: 32, marginBottom: 24 }}>Wedding Details</h2>

    {/* Ceremony */}
    <div style={{ marginBottom: 32 }}>
      <h3>Ceremony</h3>
      <p>15 April 2026 · 11:30 AM</p>
      <p>St. Mary’s Church, Palluruthy</p>

      <a
        href="https://www.google.com/maps?q=St+Mary's+Church+Palluruthy"
        target="_blank"
        rel="noopener noreferrer"
        className="map-link"
      >
        📍Location
      </a>
    </div>

    {/* Reception */}
    <div>
      <h3>Reception</h3>
      <p>15 June 2026 · 2:00 PM</p>
      <p>The Grand Hall</p>
    </div>
  </section>
);
}