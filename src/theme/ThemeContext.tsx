import React, {createContext, useContext, useState, useCallback, useMemo, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppTheme} from './theme';
import {lightTheme} from './lightTheme';
import {darkTheme} from './darkTheme';

const THEME_STORAGE_KEY = '@app_theme_preference';

interface ThemeContextValue {
  theme: AppTheme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then(value => {
      if (value === 'dark') {
        setIsDark(true);
      }
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newValue = !prev;
      AsyncStorage.setItem(THEME_STORAGE_KEY, newValue ? 'dark' : 'light');
      return newValue;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme: isDark ? darkTheme : lightTheme,
      isDark,
      toggleTheme,
    }),
    [isDark, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  return context;
}

export function useColors() {
  const {theme} = useTheme();
  return theme.colors;
}
