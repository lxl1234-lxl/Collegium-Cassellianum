import { useState, useEffect } from 'react';

export type ThemeMode = 'academy' | 'combat';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('cassell-theme') as ThemeMode;
    if (savedTheme === 'academy' || savedTheme === 'combat') {
      return savedTheme;
    }
    return 'academy';
  });

  useEffect(() => {
    document.documentElement.classList.remove('academy', 'combat', 'dark');
    document.documentElement.classList.add(theme);
    if (theme === 'combat') {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('cassell-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'academy' ? 'combat' : 'academy');
  };

  return {
    theme,
    setTheme,
    toggleTheme,
    isCombat: theme === 'combat',
    isAcademy: theme === 'academy',
  };
}
