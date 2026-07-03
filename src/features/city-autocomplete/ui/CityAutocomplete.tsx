import { useCallback, useMemo, useState } from 'react';

import type { GeocodingCity } from '@/shared/api/openMeteo';
import { searchCities } from '@/shared/api/openMeteo';
import { useDebouncedOptions } from '@/shared/lib/useDebouncedOptions';
import { AsyncAutocomplete } from '@/shared/ui/async-autocomplete';

import { CITY_AUTOCOMPLETE_TEXT, CITY_AUTOCOMPLETE_WIDTH } from '../config';

type CityAutocompleteProps = {
  value: GeocodingCity | null;
  onChange: (city: GeocodingCity | null) => void;
};

const getCityLabel = (city: GeocodingCity) =>
  [city.name, city.admin1, city.country].filter(Boolean).join(', ');

export const CityAutocomplete = ({ value, onChange }: CityAutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');

  const fallbackOptions = useMemo(() => (value ? [value] : []), [value]);
  const loadOptions = useCallback((cityName: string) => searchCities(cityName), []);

  const { isLoading, options } = useDebouncedOptions({
    fallbackOptions,
    inputValue,
    loadOptions,
  });

  return (
    <AsyncAutocomplete
      value={value}
      options={options}
      loading={isLoading}
      inputValue={inputValue}
      onInputChange={setInputValue}
      onChange={onChange}
      getOptionLabel={getCityLabel}
      isOptionEqualToValue={(option, selectedValue) => option.id === selectedValue.id}
      noOptionsText={CITY_AUTOCOMPLETE_TEXT.noOptions}
      loadingText={CITY_AUTOCOMPLETE_TEXT.loading}
      label={CITY_AUTOCOMPLETE_TEXT.label}
      placeholder={CITY_AUTOCOMPLETE_TEXT.placeholder}
      sx={{ width: { xs: '100%', md: CITY_AUTOCOMPLETE_WIDTH } }}
    />
  );
};
