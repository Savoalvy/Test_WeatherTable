export const APP_FONT_FAMILY = "'Montserrat', Arial, sans-serif";

export const APP_BORDER_RADIUS = 8;

export const DATA_TABLE_UI = {
  height: 720,
  minRowHeight: 100,
  maxRowHeight: 300,
  cellVerticalPadding: 12,
  loadingOverlayOpacity: 0.68,
  loadingOverlayBlur: 'blur(2px)',
  scrollbarSize: 8,
  scrollbarThumbBorderWidth: 2,
} as const;

export const BASE_MODAL_UI = {
  titleClosePaddingRight: 7,
  closeButtonOffset: 10,
} as const;

export const ASYNC_OPTIONS_DEFAULTS = {
  minLength: 2,
  debounceDelay: 350,
} as const;
