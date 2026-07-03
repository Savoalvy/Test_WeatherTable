import { Chip, Stack, Typography } from '@mui/material';

import { formatDate } from '@/shared/lib/date';
import { BaseModal } from '@/shared/ui/base-modal';

import { WEATHER_GRID_TEXT } from '../config/weatherGridText';
import type { WeatherRow } from '../model/types';

type WeatherDetailsModalProps = {
  row: WeatherRow | null;
  onClose: () => void;
};

export const WeatherDetailsModal = ({ row, onClose }: WeatherDetailsModalProps) => {
  return (
    <BaseModal
      open={Boolean(row)}
      onClose={onClose}
      title={WEATHER_GRID_TEXT.detailsTitle}>
      {row && (
        <Stack spacing={2}>
          <Typography variant="h6">{row.city}</Typography>
          <Typography color="text.secondary">{row.description}</Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
            <Chip label={formatDate(row.observedAt)} />
            <Chip label={`${row.temperature.toFixed(1)} °C`} color="primary" />
            <Chip
              label={`${WEATHER_GRID_TEXT.feelsLike} ${row.apparentTemperature.toFixed(1)} °C`}
            />
            <Chip label={`${WEATHER_GRID_TEXT.humidity} ${row.humidity}%`} />
            <Chip label={`${WEATHER_GRID_TEXT.wind} ${row.windSpeed.toFixed(1)} м/с`} />
            <Chip
              label={`${WEATHER_GRID_TEXT.precipitation} ${row.precipitationProbability}%`}
            />
          </Stack>
        </Stack>
      )}
    </BaseModal>
  );
};
