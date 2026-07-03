import { Typography } from '@mui/material';
import type { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { formatDate } from '@/shared/lib/date';

import type { WeatherRow } from '../model/types';
import { TemperatureChip } from '../ui/cells/TemperatureChip';
import { WeatherImageCell } from '../ui/cells/WeatherImageCell';

import { WEATHER_GRID_COLUMN_WIDTH } from './tableConfig';
import { WEATHER_GRID_TEXT } from './weatherGridText';

type CreateWeatherGridColumnsParams = {
  onPreviewImage: (row: WeatherRow) => void;
};

export const createWeatherGridColumns = ({
  onPreviewImage,
}: CreateWeatherGridColumnsParams): GridColDef<WeatherRow>[] => [
  {
    field: 'image',
    headerName: WEATHER_GRID_TEXT.columns.image,
    width: WEATHER_GRID_COLUMN_WIDTH.image,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    renderCell: (params: GridRenderCellParams<WeatherRow, string>) => (
      <WeatherImageCell
        row={params.row}
        src={params.value}
        onPreviewImage={onPreviewImage}
      />
    ),
  },
  {
    field: 'city',
    headerName: WEATHER_GRID_TEXT.columns.city,
    width: WEATHER_GRID_COLUMN_WIDTH.city,
    align: 'left',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams<WeatherRow, string>) => (
      <Typography sx={{ color: 'primary.main', fontWeight: 700 }}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'description',
    headerName: WEATHER_GRID_TEXT.columns.description,
    minWidth: WEATHER_GRID_COLUMN_WIDTH.descriptionMin,
    flex: 1,
    align: 'left',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams<WeatherRow, string>) => (
      <Typography
        sx={{
          color: 'text.secondary',
          fontFamily: 'Georgia, serif',
          fontSize: 15,
          lineHeight: 1.55,
          whiteSpace: 'normal',
        }}>
        {params.value}
      </Typography>
    ),
  },
  {
    field: 'observedAt',
    headerName: WEATHER_GRID_TEXT.columns.observedAt,
    width: WEATHER_GRID_COLUMN_WIDTH.observedAt,
    type: 'dateTime',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value: Date) => formatDate(value),
    renderCell: (params: GridRenderCellParams<WeatherRow, Date>) => (
      <Typography sx={{ color: 'warning.main', fontWeight: 600 }}>
        {params.value ? formatDate(params.value) : ''}
      </Typography>
    ),
  },
  {
    field: 'temperature',
    headerName: WEATHER_GRID_TEXT.columns.temperature,
    width: WEATHER_GRID_COLUMN_WIDTH.temperature,
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: GridRenderCellParams<WeatherRow, number>) => (
      <TemperatureChip value={params.value} />
    ),
  },
  {
    field: 'apparentTemperature',
    headerName: WEATHER_GRID_TEXT.columns.apparentTemperature,
    width: WEATHER_GRID_COLUMN_WIDTH.apparentTemperature,
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value: number) => `${value.toFixed(1)} °C`,
  },
  {
    field: 'humidity',
    headerName: WEATHER_GRID_TEXT.columns.humidity,
    width: WEATHER_GRID_COLUMN_WIDTH.humidity,
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value: number) => `${value}%`,
  },
  {
    field: 'windSpeed',
    headerName: WEATHER_GRID_TEXT.columns.windSpeed,
    width: WEATHER_GRID_COLUMN_WIDTH.windSpeed,
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value: number) => `${value.toFixed(1)} м/с`,
  },
  {
    field: 'precipitationProbability',
    headerName: WEATHER_GRID_TEXT.columns.precipitationProbability,
    width: WEATHER_GRID_COLUMN_WIDTH.precipitationProbability,
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value: number) => `${value}%`,
  },
];
