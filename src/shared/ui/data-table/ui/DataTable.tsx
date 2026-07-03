import { Box, CircularProgress } from '@mui/material';
import { alpha } from '@mui/material/styles';
import type {
  DataGridProps,
  GridOverlayProps,
  GridValidRowModel,
} from '@mui/x-data-grid';
import { DataGrid, GridOverlay } from '@mui/x-data-grid';

import { DATA_TABLE_UI } from '@/shared/config';

type DataTableProps<TRow extends GridValidRowModel> = Omit<
  DataGridProps<TRow>,
  'loading' | 'slots' | 'slotProps'
> & {
  isLoading?: boolean;
  height?: number;
};

const TableLoadingOverlay = (props: GridOverlayProps) => {
  return (
    <GridOverlay
      {...props}
      sx={{
        bgcolor: (theme) =>
          alpha(theme.palette.background.default, DATA_TABLE_UI.loadingOverlayOpacity),
        backdropFilter: DATA_TABLE_UI.loadingOverlayBlur,
      }}>
      <CircularProgress />
    </GridOverlay>
  );
};

export const DataTable = <TRow extends GridValidRowModel>({
  isLoading = false,
  height = DATA_TABLE_UI.height,
  ...dataGridProps
}: DataTableProps<TRow>) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height,
        width: '100%',
        overflow: 'hidden',
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
      }}>
      <DataGrid
        {...dataGridProps}
        loading={isLoading}
        slots={{
          loadingOverlay: TableLoadingOverlay,
        }}
        slotProps={{
          loadingOverlay: {
            noRowsVariant: 'circular-progress',
            variant: 'circular-progress',
          },
        }}
      />
    </Box>
  );
};
