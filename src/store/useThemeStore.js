import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  colors: {
    primary: '#1d5eb9',
    dark: {
      background: '#121212',
      card: '#181818',
      text: '#FFFFFF',
      subText: '#B3B3B3',
      border: '#282828',
      input: '#282828'
    },
    light: {
      background: '#FFFFFF',
      card: '#F1F1F1',
      text: '#000000',
      subText: '#555555',
      border: '#E0E0E0',
      input: '#F1F1F1'
    }
  }
}));