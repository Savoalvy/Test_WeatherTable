import { useMemo, useState } from 'react';
import { Alert, Stack } from '@mui/material';
import type { GridRowParams } from '@mui/x-data-grid';

import { DataTable } from '@/shared/ui/data-table';

import { createWeatherGridColumns } from '../config/createWeatherGridColumns';
import {
  WEATHER_GRID_INITIAL_PAGE_SIZE,
  WEATHER_GRID_PAGE_SIZE_OPTIONS,
  WEATHER_GRID_SORTING_ORDER,
} from '../config/tableConfig';
import type { WeatherRow } from '../model/types';
import { useWeatherForecast } from '../model/useWeatherForecast';
import { useWeatherGridSort } from '../model/useWeatherGridSort';

import { WeatherDetailsModal } from './WeatherDetailsModal';
import { WeatherGridToolbar } from './WeatherGridToolbar';
import { WeatherImageModal } from './WeatherImageModal';

export const WeatherGrid = () => {
  const { city, error, isLoading, rows, setCity } = useWeatherForecast();
  const { handleSortModelChange, sortModel } = useWeatherGridSort();
  const [selectedRow, setSelectedRow] = useState<WeatherRow | null>(null);
  const [previewImage, setPreviewImage] = useState<WeatherRow | null>(null);

  const columns = useMemo(
    () => createWeatherGridColumns({ onPreviewImage: setPreviewImage }),
    [],
  );

  const handleCityChange = (nextCity: typeof city) => {
    setCity(nextCity);
    setSelectedRow(null);
    setPreviewImage(null);
  };

  return (
    <Stack spacing={2}>
      <WeatherGridToolbar city={city} onCityChange={handleCityChange} />

      {error && <Alert severity="error">{error}</Alert>}

      <DataTable
        rows={rows}
        columns={columns}
        isLoading={isLoading}
        getRowHeight={() => 'auto'}
        sortModel={sortModel}
        sortingOrder={WEATHER_GRID_SORTING_ORDER}
        onSortModelChange={handleSortModelChange}
        onRowClick={(params: GridRowParams<WeatherRow>) => setSelectedRow(params.row)}
        pageSizeOptions={WEATHER_GRID_PAGE_SIZE_OPTIONS}
        initialState={{
          pagination: { paginationModel: { pageSize: WEATHER_GRID_INITIAL_PAGE_SIZE } },
        }}
        disableColumnFilter
        disableRowSelectionOnClick
      />

      <WeatherDetailsModal row={selectedRow} onClose={() => setSelectedRow(null)} />
      <WeatherImageModal row={previewImage} onClose={() => setPreviewImage(null)} />
    </Stack>
  );
};
