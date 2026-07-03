import type { ForecastResponse, GeocodingCity } from '@/shared/api/openMeteo';

import { WEATHER_GRID_FORECAST_HOURS } from '../config/tableConfig';

import type { WeatherRow } from './types';
import { getWeatherDescription, getWeatherImage } from './weatherCode';

export const mapForecastToRows = (
  forecast: ForecastResponse,
  city: GeocodingCity,
): WeatherRow[] => {
  const rowCount = Math.min(forecast.hourly.time.length, WEATHER_GRID_FORECAST_HOURS);

  return Array.from({ length: rowCount }, (_, index) => {
    const weatherCode = forecast.hourly.weather_code[index] ?? 0;
    const image = getWeatherImage(weatherCode);

    return {
      id: index + 1,
      city: city.name,
      image,
      largeImage: image,
      description: getWeatherDescription(weatherCode),
      observedAt: new Date(forecast.hourly.time[index]),
      temperature: forecast.hourly.temperature_2m[index] ?? 0,
      apparentTemperature: forecast.hourly.apparent_temperature[index] ?? 0,
      humidity: forecast.hourly.relative_humidity_2m[index] ?? 0,
      windSpeed: forecast.hourly.wind_speed_10m[index] ?? 0,
      precipitationProbability: forecast.hourly.precipitation_probability[index] ?? 0,
      weatherCode,
    };
  });
};
