import { useState } from 'react';
import type { GridSortModel } from '@mui/x-data-grid';

import { readStorageValue, writeStorageValue } from '@/shared/lib/storage';

import { WEATHER_GRID_SORT_STORAGE_KEY } from './storageKeys';

const DEFAULT_SORT_MODEL: GridSortModel = [{ field: 'observedAt', sort: 'asc' }];

export const useWeatherGridSort = () => {
  const [sortModel, setSortModel] = useState<GridSortModel>(() =>
    readStorageValue<GridSortModel>(WEATHER_GRID_SORT_STORAGE_KEY, DEFAULT_SORT_MODEL),
  );

  const handleSortModelChange = (model: GridSortModel) => {
    const nextModel = model.length > 0 ? model : sortModel;

    setSortModel(nextModel);
    writeStorageValue(WEATHER_GRID_SORT_STORAGE_KEY, nextModel);
  };

  return {
    handleSortModelChange,
    sortModel,
  };
};
