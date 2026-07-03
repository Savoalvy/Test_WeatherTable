import { Stack, Typography } from '@mui/material';

import { CityAutocomplete } from '@/features/city-autocomplete';
import type { GeocodingCity } from '@/shared/api/openMeteo';

import { WEATHER_GRID_TEXT } from '../config/weatherGridText';

type WeatherGridToolbarProps = {
  city: GeocodingCity | null;
  onCityChange: (city: GeocodingCity | null) => void;
};

export const WeatherGridToolbar = ({ city, onCityChange }: WeatherGridToolbarProps) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      sx={{
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
      }}>
      <CityAutocomplete value={city} onChange={onCityChange} />
      <Typography color="text.secondary">
        {city
          ? `${city.latitude.toFixed(2)}, ${city.longitude.toFixed(2)}`
          : WEATHER_GRID_TEXT.emptyCity}
      </Typography>
    </Stack>
  );
};
