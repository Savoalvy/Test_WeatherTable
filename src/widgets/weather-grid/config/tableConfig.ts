export const WEATHER_GRID_PAGE_SIZE_OPTIONS = [4, 8, 12, 16, 20, 24];

export const WEATHER_GRID_INITIAL_PAGE_SIZE = 24;

export const WEATHER_GRID_SORTING_ORDER = ['asc', 'desc'] as const;

export const WEATHER_GRID_FORECAST_HOURS = 24;

export const WEATHER_GRID_COLUMN_WIDTH = {
  image: 150,
  city: 150,
  descriptionMin: 240,
  observedAt: 190,
  temperature: 150,
  apparentTemperature: 145,
  humidity: 135,
  windSpeed: 120,
  precipitationProbability: 125,
} as const;

export const WEATHER_IMAGE_CELL_SIZE = {
  width: 112,
  height: 78,
} as const;

export const WEATHER_IMAGE_MODAL_MAX_HEIGHT = '72vh';
