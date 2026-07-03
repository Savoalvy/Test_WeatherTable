import { Box } from '@mui/material';

import { BaseModal } from '@/shared/ui/base-modal';

import { WEATHER_IMAGE_MODAL_MAX_HEIGHT } from '../config/tableConfig';
import type { WeatherRow } from '../model/types';

type WeatherImageModalProps = {
  row: WeatherRow | null;
  onClose: () => void;
};

export const WeatherImageModal = ({ row, onClose }: WeatherImageModalProps) => {
  return (
    <BaseModal
      open={Boolean(row)}
      onClose={onClose}
      title={row?.description}
      maxWidth="md">
      {row && (
        <Box
          component="img"
          src={row.largeImage}
          alt={row.description}
          sx={{
            display: 'block',
            width: '100%',
            maxHeight: WEATHER_IMAGE_MODAL_MAX_HEIGHT,
            objectFit: 'contain',
          }}
        />
      )}
    </BaseModal>
  );
};
