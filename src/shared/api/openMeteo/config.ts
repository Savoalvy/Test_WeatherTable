export const OPEN_METEO_FORECAST_URL =
  import.meta.env.VITE_OPEN_METEO_FORECAST_URL ??
  'https://api.open-meteo.com/v1/forecast';

export const OPEN_METEO_GEOCODING_URL =
  import.meta.env.VITE_OPEN_METEO_GEOCODING_URL ??
  'https://geocoding-api.open-meteo.com/v1/search';

export const OPEN_METEO_GEOCODING_PARAMS = {
  count: 8,
  language: 'ru',
  format: 'json',
} as const;

export const OPEN_METEO_FORECAST_PARAMS = {
  forecastDays: 3,
  timezone: 'auto',
  windSpeedUnit: 'ms',
  hourly: [
    'temperature_2m',
    'apparent_temperature',
    'relative_humidity_2m',
    'precipitation_probability',
    'weather_code',
    'wind_speed_10m',
  ],
} as const;
