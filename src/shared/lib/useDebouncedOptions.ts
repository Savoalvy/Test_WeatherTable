import { useEffect, useState } from 'react';
import { debounce } from '@mui/material/utils';

import { ASYNC_OPTIONS_DEFAULTS } from '@/shared/config';

type UseDebouncedOptionsParams<TOption> = {
  inputValue: string;
  minLength?: number;
  debounceDelay?: number;
  fallbackOptions?: TOption[];
  loadOptions: (inputValue: string) => Promise<TOption[]>;
};

export const useDebouncedOptions = <TOption>({
  inputValue,
  minLength = ASYNC_OPTIONS_DEFAULTS.minLength,
  debounceDelay = ASYNC_OPTIONS_DEFAULTS.debounceDelay,
  fallbackOptions = [],
  loadOptions,
}: UseDebouncedOptionsParams<TOption>) => {
  const [options, setOptions] = useState<TOption[]>(fallbackOptions);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue.trim().length < minLength) {
      setOptions(fallbackOptions);
      return;
    }

    let isActual = true;

    const loadDebouncedOptions = debounce(() => {
      setIsLoading(true);
      loadOptions(inputValue)
        .then((nextOptions) => {
          if (isActual) {
            setOptions(nextOptions);
          }
        })
        .catch((error: unknown) => {
          if (isActual) {
            console.error(error);
            setOptions([]);
          }
        })
        .finally(() => {
          if (isActual) {
            setIsLoading(false);
          }
        });
    }, debounceDelay);

    loadDebouncedOptions();

    return () => {
      isActual = false;
      loadDebouncedOptions.clear();
    };
  }, [debounceDelay, fallbackOptions, inputValue, loadOptions, minLength]);

  return {
    isLoading,
    options,
  };
};
