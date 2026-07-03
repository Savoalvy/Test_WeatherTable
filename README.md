# Weather MUI Grid

Тестовое приложение на React, TypeScript, Vite и MUI. Основной экран содержит таблицу `DataGrid` с почасовым прогнозом погоды для выбранного города.

## Что реализовано

- Таблица на `@mui/x-data-grid`.
- Поиск города через Open-Meteo Geocoding API.
- Загрузка прогноза через Open-Meteo Forecast API.
- Локальные weather-картинки по `weather_code`.
- Колонки с картинкой, городом, описанием, датой и числовыми погодными показателями.
- Сортировка колонок только по возрастанию и убыванию.
- Автоматическая высота строк через `getRowHeight`, с ограничением от 100px до 300px.
- Клик по строке открывает модальное окно с деталями прогноза.
- Клик по картинке открывает модальное окно с большой картинкой.
- Сохранение выбранного города и сортировки в `localStorage`.
- Переключение светлой и темной темы.
- Глобальная стилизация MUI-компонентов через `createTheme`.
- Настроены ESLint, Stylelint и Prettier.

## Стек

- React 19
- TypeScript
- Vite
- Material UI
- MUI X DataGrid
- Open-Meteo API
- Day.js
- ESLint
- Stylelint
- Prettier

## Архитектура

Проект разделен на слои:

- `src/app` - точка сборки приложения, провайдеры и тема.
- `src/pages` - страницы приложения.
- `src/widgets` - крупные самостоятельные блоки интерфейса. Сейчас здесь лежит погодная таблица.
- `src/features` - пользовательские действия и сценарии. Сейчас здесь лежат выбор города и переключение темы.
- `src/shared` - переиспользуемые API-клиенты, UI-компоненты, утилиты и общие config/tokens.

Папка `components` не используется. Если компонент содержит пользовательский сценарий, он лежит в `features`. Если компонент полностью переиспользуемый и не знает про бизнес-логику, он лежит в `shared/ui`.

### Weather Widget

У виджета погоды есть собственные настройки:

- `config/tableConfig.ts` - размеры таблицы, ширины колонок, page size, sorting order.
- `config/weatherGridText.ts` - тексты виджета и названия колонок.
- `config/createWeatherGridColumns.tsx` - конфигурация колонок `DataGrid`.
- `model/useWeatherForecast.ts` - состояние города, строк таблицы, загрузки и ошибки.
- `model/useWeatherGridSort.ts` - состояние сортировки и сохранение сортировки.
- `model/mapForecastToRows.ts` - преобразование ответа API в строки таблицы.

### Features

- `features/city-autocomplete` - фича выбора города. Использует `searchCities`, `useDebouncedOptions` и shared-компонент `AsyncAutocomplete`.
- `features/theme-toggle` - фича переключения темы. Использует `useThemeMode` из app provider и shared-компонент `ThemeModeSwitch`.

`ThemeModeSwitch` лежит в `shared/ui/theme-mode-switch`, потому что это чистый UI-компонент без знания о провайдере темы.

## Как устроены запросы

API-клиент лежит в `src/shared/api/openMeteo`.

`searchCities` используется в автокомплите города:

1. Пользователь вводит город.
2. `CityAutocomplete` передает строку в `useDebouncedOptions`.
3. Хук ждет debounce-паузу и вызывает `searchCities`.
4. `searchCities` собирает URL для Open-Meteo Geocoding API.
5. Результаты возвращаются в `AsyncAutocomplete` как options.

`getCityForecast` используется для таблицы:

1. Пользователь выбирает город.
2. `useWeatherForecast` сохраняет город в `localStorage`.
3. Хук вызывает `getCityForecast(city)`.
4. API-клиент собирает URL с `latitude`, `longitude`, `hourly`, `forecast_days`, `timezone` и `wind_speed_unit`.
5. Ответ Open-Meteo передается в `mapForecastToRows`.
6. `mapForecastToRows` превращает погодные массивы API в строки `WeatherRow` для `DataGrid`.

Для автокомплита используется `debounce` из MUI, чтобы не отправлять запрос на каждую введенную букву. Если эффект уже устарел, результат старого запроса игнорируется и не попадает в state.

## LocalStorage

В `localStorage` сохраняются:

- выбранный город;
- модель сортировки таблицы;
- выбранная тема.

Чтение и запись значений вынесены в `src/shared/lib/storage.ts`.

## Env

API-ключи не нужны. Базовые URL можно переопределить через `.env`:

```bash
VITE_OPEN_METEO_FORECAST_URL=https://api.open-meteo.com/v1/forecast
VITE_OPEN_METEO_GEOCODING_URL=https://geocoding-api.open-meteo.com/v1/search
```

Пример лежит в `.env.example`.

## Запуск

```bash
npm install
npm run dev
```

Локальный адрес по умолчанию:

```text
http://127.0.0.1:5173/
```

## Проверки

```bash
npm run type:check
npm run lint
npm run lint:styles
npm run format:check
npm run build
```

## Деплой

Ссылка на деплой добавляется после публикации на Netlify, GitHub Pages или другом хостинге.
