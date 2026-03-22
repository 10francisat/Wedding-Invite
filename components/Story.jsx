'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const storyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        storyRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none', // animate once
          },
        }
      );
    }, storyRef);

    return () => ctx.revert(); // 🔑 prevents blank screen
  }, []);

  return (
    <section ref={storyRef} className="section">
      <h2 style={{ fontSize: 32, marginBottom: 24 }}>(Mathew 19:6)</h2>
      <p style={{ maxWidth: 440, lineHeight: 1.8 }}>
        "So they are no longer two, but one.
      Therefore what God has joined together, let man not separate."
      </p>
    </section>
  );
}
