import type { PropsWithChildren } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { PaletteMode } from '@mui/material';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import { ThemeModeContext } from '../model/theme-context';
import { createAppTheme } from '../theme/createAppTheme';

const THEME_STORAGE_KEY = 'weather-grid-theme-mode';

const getInitialMode = (): PaletteMode => {
  const storedMode = localStorage.getItem(THEME_STORAGE_KEY);

  return storedMode === 'dark' ? 'dark' : 'light';
};

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggleMode: () =>
        setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};
