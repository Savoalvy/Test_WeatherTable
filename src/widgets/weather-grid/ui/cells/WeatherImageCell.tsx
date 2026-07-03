import { Box } from '@mui/material';

import { WEATHER_IMAGE_CELL_SIZE } from '../../config/tableConfig';
import type { WeatherRow } from '../../model/types';

type WeatherImageCellProps = {
  row: WeatherRow;
  src?: string;
  onPreviewImage: (row: WeatherRow) => void;
};

export const WeatherImageCell = ({ row, src, onPreviewImage }: WeatherImageCellProps) => {
  return (
    <Box
      component="button"
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onPreviewImage(row);
      }}
      sx={{
        display: 'block',
        width: WEATHER_IMAGE_CELL_SIZE.width,
        height: WEATHER_IMAGE_CELL_SIZE.height,
        p: 0,
        overflow: 'hidden',
        cursor: 'zoom-in',
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'transparent',
      }}>
      <Box
        component="img"
        src={src}
        alt={row.description}
        sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};
