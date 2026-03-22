'use client';
import { useEffect, useState } from 'react';

export default function Countdown() {
  // 🔔 Set your wedding date here
  const weddingDate = new Date('2026-04-09T12:00:00'); // YYYY-MM-DDTHH:MM:SS

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <p className="countdown-title">Countdown</p>

      <div className="countdown-grid">
        <div className="countdown-box">
          <span>{timeLeft.days}</span>
          <small>Days</small>
        </div>

        <div className="countdown-box">
          <span>{timeLeft.hours}</span>
          <small>Hours</small>
        </div>

        <div className="countdown-box">
          <span>{timeLeft.minutes}</span>
          <small>Minutes</small>
        </div>

        <div className="countdown-box">
          <span>{timeLeft.seconds}</span>
          <small>Seconds</small>
        </div>
      </div>
    </section>
  );
}
