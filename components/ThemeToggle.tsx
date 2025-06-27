'use client';
import { useThemeStore } from '@/lib/theme';

export default function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex space-x-4 p-2">
      <button onClick={() => setTheme('synthwave')} className="px-3 py-1 bg-pink-600 text-white rounded">
        Synthwave
      </button>
      <button onClick={() => setTheme('matrix')} className="px-3 py-1 bg-green-600 text-white rounded">
        Matrix
      </button>
    </div>
  );
}