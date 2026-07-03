import type { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

import { APP_BORDER_RADIUS, APP_FONT_FAMILY, DATA_TABLE_UI } from '@/shared/config';

import { DARK_THEME_TOKENS, LIGHT_THEME_TOKENS } from './constants';

export const getThemeTokens = (mode: PaletteMode) =>
  mode === 'dark' ? DARK_THEME_TOKENS : LIGHT_THEME_TOKENS;

export const createAppTheme = (mode: PaletteMode) => {
  const tokens = getThemeTokens(mode);

  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.colorAccent,
      },
      warning: {
        main: tokens.colorWarning,
      },
      background: {
        default: tokens.colorPageBg,
        paper: tokens.colorSurface,
      },
      text: {
        primary: tokens.colorTextPrimary,
        secondary: tokens.colorTextSecondary,
      },
      divider: tokens.colorBorder,
    },
    typography: {
      fontFamily: APP_FONT_FAMILY,
      h4: {
        letterSpacing: 0,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: APP_BORDER_RADIUS,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: tokens.colorPageBg,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: APP_BORDER_RADIUS,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: APP_BORDER_RADIUS,
            fontWeight: 600,
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 0,
            borderRadius: APP_BORDER_RADIUS,
            backgroundColor: tokens.colorSurface,
            color: tokens.colorTextPrimary,
            '& .MuiDataGrid-cell--textCenter': {
              justifyContent: 'center',
            },
            '& .MuiDataGrid-cell--textLeft': {
              justifyContent: 'flex-start',
            },
            '& .MuiDataGrid-cell--textRight': {
              justifyContent: 'flex-end',
            },
            '& .MuiDataGrid-scrollbar': {
              scrollbarWidth: 'thin',
              scrollbarColor: `${tokens.colorBorder} transparent`,
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar': {
              width: DATA_TABLE_UI.scrollbarSize,
              height: DATA_TABLE_UI.scrollbarSize,
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb': {
              borderRadius: APP_BORDER_RADIUS,
              backgroundColor: tokens.colorBorder,
              border: `${DATA_TABLE_UI.scrollbarThumbBorderWidth}px solid ${tokens.colorSurface}`,
            },
            '& .MuiDataGrid-scrollbar::-webkit-scrollbar-thumb:hover': {
              backgroundColor: tokens.colorTextSecondary,
            },
          },
          columnHeaders: {
            backgroundColor: tokens.colorAccentSoft,
            borderColor: tokens.colorBorder,
          },
          columnHeader: {
            '&:focus, &:focus-within': {
              outline: 'none',
            },
          },
          cell: {
            display: 'flex',
            alignItems: 'center',
            maxHeight: `${DATA_TABLE_UI.maxRowHeight}px !important`,
            paddingTop: DATA_TABLE_UI.cellVerticalPadding,
            paddingBottom: DATA_TABLE_UI.cellVerticalPadding,
            borderColor: tokens.colorBorder,
            lineHeight: 1.4,
            whiteSpace: 'normal',
            '&:focus, &:focus-within': {
              outline: 'none',
            },
          },
          row: {
            minHeight: `${DATA_TABLE_UI.minRowHeight}px !important`,
            maxHeight: `${DATA_TABLE_UI.maxRowHeight}px !important`,
            cursor: 'pointer',
          },
          footerContainer: {
            borderColor: tokens.colorBorder,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: APP_BORDER_RADIUS,
            backgroundColor: tokens.colorSurface,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: APP_BORDER_RADIUS,
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.Mui-checked': {
              color: tokens.colorAccent,
            },
          },
          track: {
            backgroundColor: tokens.colorBorder,
          },
        },
      },
    },
  });
};
