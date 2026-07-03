import { useThemeMode } from '@/app/providers/ThemeProvider';
import { ThemeModeSwitch } from '@/shared/ui/theme-mode-switch';

import { THEME_TOGGLE_TEXT } from '../config';

export const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeMode();
  const isDarkMode = mode === 'dark';

  return (
    <ThemeModeSwitch
      checked={isDarkMode}
      label={isDarkMode ? THEME_TOGGLE_TEXT.dark : THEME_TOGGLE_TEXT.light}
      onChange={toggleMode}
    />
  );
};
