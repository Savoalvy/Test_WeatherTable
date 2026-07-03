import type { SxProps, Theme } from '@mui/material';
import { Autocomplete, TextField } from '@mui/material';

type AsyncAutocompleteProps<TOption> = {
  value: TOption | null;
  options: TOption[];
  loading: boolean;
  inputValue: string;
  label: string;
  placeholder?: string;
  noOptionsText?: string;
  loadingText?: string;
  sx?: SxProps<Theme>;
  getOptionLabel: (option: TOption) => string;
  isOptionEqualToValue: (option: TOption, value: TOption) => boolean;
  onInputChange: (value: string) => void;
  onChange: (value: TOption | null) => void;
};

export const AsyncAutocomplete = <TOption,>({
  value,
  options,
  loading,
  inputValue,
  label,
  placeholder,
  noOptionsText,
  loadingText,
  sx,
  getOptionLabel,
  isOptionEqualToValue,
  onInputChange,
  onChange,
}: AsyncAutocompleteProps<TOption>) => {
  return (
    <Autocomplete
      value={value}
      options={options}
      loading={loading}
      inputValue={inputValue}
      onInputChange={(_, nextValue) => onInputChange(nextValue)}
      onChange={(_, nextValue) => onChange(nextValue)}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      noOptionsText={noOptionsText}
      loadingText={loadingText}
      sx={sx}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};
