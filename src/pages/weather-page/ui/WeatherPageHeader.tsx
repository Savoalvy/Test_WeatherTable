import { Box, Stack, Typography } from '@mui/material';

import { ThemeToggle } from '@/features/theme-toggle';

import { WEATHER_PAGE_TEXT } from '../config';

export const WeatherPageHeader = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      sx={{
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
      }}>
      <Box>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 700 }}>
          {WEATHER_PAGE_TEXT.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 0.5 }}>
          {WEATHER_PAGE_TEXT.subtitle}
        </Typography>
      </Box>
      <ThemeToggle />
    </Stack>
  );
};
