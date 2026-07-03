import dayjs from 'dayjs';

export const DateTimeFormat = {
  LOCAL_DATE: 'YYYY-MM-DD',
  LOCAL_DATE_TIME: 'YYYY-MM-DDTHH:mm:ss',
  DATE_TIME: 'DD.MM.YYYY HH:mm:ss',
  DATE_TIME_SHORT: 'DD.MM.YYYY HH:mm',
  DATE: 'DD.MM.YYYY',
  TIME: 'HH:mm:ss',
  TIME_SHORT: 'HH:mm',
  YEAR: 'YYYY',
} as const;

export type DateTimeFormatValue = (typeof DateTimeFormat)[keyof typeof DateTimeFormat];

export const formatDate = (
  value: Date | string,
  format: DateTimeFormatValue = DateTimeFormat.DATE_TIME_SHORT,
) => dayjs(value).format(format);
