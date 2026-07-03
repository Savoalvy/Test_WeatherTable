export const readStorageValue = <TValue>(key: string, fallback: TValue): TValue => {
  const storageValue = localStorage.getItem(key);

  if (!storageValue) return fallback;

  try {
    return JSON.parse(storageValue) as TValue;
  } catch {
    return fallback;
  }
};

export const writeStorageValue = <TValue>(key: string, value: TValue) => {
  localStorage.setItem(key, JSON.stringify(value));
};
