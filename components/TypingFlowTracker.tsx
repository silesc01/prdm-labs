'use client';
import { useEffect, useState } from 'react';

export default function TypingFlowTracker() {
  const [speed, setSpeed] = useState(0);
  const [lastKeyTime, setLastKeyTime] = useState(Date.now());

  useEffect(() => {
    const handleKey = () => {
      const now = Date.now();
      const diff = now - lastKeyTime;
      const newSpeed = Math.min(100, Math.max(0, 100 - diff));
      setSpeed(newSpeed);
      setLastKeyTime(now);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lastKeyTime]);

  return (
    <div className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 text-xs text-white">
      Flow: {speed.toFixed(0)}%
    </div>
  );
}
