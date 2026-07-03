import { Chip } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const TEMPERATURE_LEVEL = {
  coldMax: 5,
  normalMax: 18,
  warmMax: 28,
} as const;

const getTemperatureChipSx = (temperature = 0) => {
  const getColor = (theme: Theme) => {
    if (temperature < TEMPERATURE_LEVEL.coldMax) return theme.palette.info.main;
    if (temperature < TEMPERATURE_LEVEL.normalMax) return theme.palette.success.main;
    if (temperature < TEMPERATURE_LEVEL.warmMax) return theme.palette.warning.main;

    return theme.palette.error.main;
  };

  return {
    color: getColor,
    borderColor: (theme: Theme) => alpha(getColor(theme), 0.42),
    bgcolor: (theme: Theme) =>
      alpha(getColor(theme), theme.palette.mode === 'dark' ? 0.16 : 0.1),
  };
};

type TemperatureChipProps = {
  value?: number;
};

export const TemperatureChip = ({ value }: TemperatureChipProps) => {
  return (
    <Chip
      label={`${value?.toFixed(1)} °C`}
      size="small"
      sx={getTemperatureChipSx(value)}
      variant="outlined"
    />
  );
};
