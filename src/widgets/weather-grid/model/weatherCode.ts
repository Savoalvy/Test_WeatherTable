const WEATHER_IMAGES = {
  clear: '/weather/clear.svg',
  cloudy: '/weather/cloudy.svg',
  fog: '/weather/fog.svg',
  rain: '/weather/rain.svg',
  snow: '/weather/snow.svg',
  storm: '/weather/storm.svg',
};

const WEATHER_DESCRIPTIONS = new Map<number, string>([
  [0, 'Ясно'],
  [1, 'Преимущественно ясно'],
  [2, 'Переменная облачность'],
  [3, 'Пасмурно'],
  [45, 'Туман'],
  [48, 'Изморозь и туман'],
  [51, 'Легкая морось'],
  [53, 'Морось'],
  [55, 'Сильная морось'],
  [56, 'Ледяная морось'],
  [57, 'Сильная ледяная морось'],
  [61, 'Небольшой дождь'],
  [63, 'Дождь'],
  [65, 'Сильный дождь'],
  [66, 'Ледяной дождь'],
  [67, 'Сильный ледяной дождь'],
  [71, 'Небольшой снег'],
  [73, 'Снег'],
  [75, 'Сильный снег'],
  [77, 'Снежные зерна'],
  [80, 'Небольшой ливень'],
  [81, 'Ливень'],
  [82, 'Сильный ливень'],
  [85, 'Снегопад'],
  [86, 'Сильный снегопад'],
  [95, 'Гроза'],
  [96, 'Гроза с градом'],
  [99, 'Сильная гроза с градом'],
]);

export const getWeatherDescription = (code: number) =>
  WEATHER_DESCRIPTIONS.get(code) ?? `Погодный код ${code}`;

export const getWeatherImage = (code: number) => {
  if (code === 0 || code === 1) return WEATHER_IMAGES.clear;
  if (code === 2 || code === 3) return WEATHER_IMAGES.cloudy;
  if (code === 45 || code === 48) return WEATHER_IMAGES.fog;
  if (code >= 51 && code <= 67) return WEATHER_IMAGES.rain;
  if (code >= 71 && code <= 86) return WEATHER_IMAGES.snow;
  if (code >= 95) return WEATHER_IMAGES.storm;

  return WEATHER_IMAGES.cloudy;
};
