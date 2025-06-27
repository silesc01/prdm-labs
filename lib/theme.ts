import { create } from 'zustand';

type Theme = 'synthwave' | 'matrix';

export const useThemeStore = create<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>((set) => ({
  theme: 'synthwave',
  setTheme: (theme) => set({ theme }),
}));