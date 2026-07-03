import {
  OPEN_METEO_FORECAST_PARAMS,
  OPEN_METEO_FORECAST_URL,
  OPEN_METEO_GEOCODING_PARAMS,
  OPEN_METEO_GEOCODING_URL,
} from './config';
import type { ForecastResponse, GeocodingCity, GeocodingResponse } from './types';

const requestJson = async <T>(url: URL): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Open-Meteo request failed: ${response.status}`);
  }

  return (await response.json()) as T;
};

export const searchCities = async (query: string) => {
  const url = new URL(OPEN_METEO_GEOCODING_URL);

  url.searchParams.set('name', query);
  url.searchParams.set('count', String(OPEN_METEO_GEOCODING_PARAMS.count));
  url.searchParams.set('language', OPEN_METEO_GEOCODING_PARAMS.language);
  url.searchParams.set('format', OPEN_METEO_GEOCODING_PARAMS.format);

  const data = await requestJson<GeocodingResponse>(url);

  return data.results ?? [];
};

export const getCityForecast = async (city: GeocodingCity) => {
  const url = new URL(OPEN_METEO_FORECAST_URL);

  url.searchParams.set('latitude', String(city.latitude));
  url.searchParams.set('longitude', String(city.longitude));
  url.searchParams.set('hourly', OPEN_METEO_FORECAST_PARAMS.hourly.join(','));
  url.searchParams.set('forecast_days', String(OPEN_METEO_FORECAST_PARAMS.forecastDays));
  url.searchParams.set('timezone', OPEN_METEO_FORECAST_PARAMS.timezone);
  url.searchParams.set('wind_speed_unit', OPEN_METEO_FORECAST_PARAMS.windSpeedUnit);

  return requestJson<ForecastResponse>(url);
};
