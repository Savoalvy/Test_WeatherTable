export type WeatherRow = {
  id: number;
  city: string;
  image: string;
  largeImage: string;
  description: string;
  observedAt: Date;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  precipitationProbability: number;
  weatherCode: number;
};
