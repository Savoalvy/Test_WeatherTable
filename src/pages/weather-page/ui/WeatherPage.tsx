import { Box, Container, Stack } from '@mui/material';

import { WeatherGrid } from '@/widgets/weather-grid';

import { WeatherPageHeader } from './WeatherPageHeader';

export const WeatherPage = () => {
  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>
        <Stack spacing={3}>
          <WeatherPageHeader />
          <WeatherGrid />
        </Stack>
      </Container>
    </Box>
  );
};
