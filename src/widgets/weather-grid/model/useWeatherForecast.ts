import { useEffect, useState } from 'react';

import type { GeocodingCity } from '@/shared/api/openMeteo';
import { getCityForecast } from '@/shared/api/openMeteo';
import { readStorageValue, writeStorageValue } from '@/shared/lib/storage';

import { WEATHER_GRID_TEXT } from '../config/weatherGridText';

import { DEFAULT_CITY } from './defaultCity';
import { mapForecastToRows } from './mapForecastToRows';
import { WEATHER_CITY_STORAGE_KEY } from './storageKeys';
import type { WeatherRow } from './types';

export const useWeatherForecast = () => {
  const [city, setCity] = useState<GeocodingCity | null>(() =>
    readStorageValue<GeocodingCity>(WEATHER_CITY_STORAGE_KEY, DEFAULT_CITY),
  );
  const [rows, setRows] = useState<WeatherRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) {
      setRows([]);
      return;
    }

    let isActual = true;

    setIsLoading(true);
    setError(null);
    writeStorageValue(WEATHER_CITY_STORAGE_KEY, city);

    getCityForecast(city)
      .then((forecast) => {
        if (isActual) {
          setRows(mapForecastToRows(forecast, city));
        }
      })
      .catch((requestError: unknown) => {
        if (isActual) {
          console.error(requestError);
          setRows([]);
          setError(WEATHER_GRID_TEXT.loadError);
        }
      })
      .finally(() => {
        if (isActual) {
          setIsLoading(false);
        }
      });

    return () => {
      isActual = false;
    };
  }, [city]);

  return {
    city,
    error,
    isLoading,
    rows,
    setCity,
  };
};
