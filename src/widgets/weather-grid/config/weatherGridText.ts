export const WEATHER_GRID_TEXT = {
  emptyCity: 'Выберите город',
  loadError:
    'Не удалось загрузить прогноз. Проверьте подключение или выберите город еще раз.',
  detailsTitle: 'Детали прогноза',
  feelsLike: 'Ощущается',
  humidity: 'Влажность',
  wind: 'Ветер',
  precipitation: 'Осадки',
  columns: {
    image: 'Фото',
    city: 'Город',
    description: 'Условия',
    observedAt: 'Дата и время',
    temperature: 'Температура',
    apparentTemperature: 'Ощущается',
    humidity: 'Влажность',
    windSpeed: 'Ветер',
    precipitationProbability: 'Осадки',
  },
} as const;
