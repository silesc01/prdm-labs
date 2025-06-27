'use client';
import { useEffect, useRef } from 'react';
import { useThemeStore } from '@/lib/theme';

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = theme === 'matrix' ? '/sounds/matrix.mp3' : '/sounds/synthwave.mp3';
      audioRef.current.play().catch(() => {});
    }
  }, [theme]);

  return <audio ref={audioRef} />;
}
