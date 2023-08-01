import dayjs from 'dayjs';

export function extractPath(input: string): string {
  const regex = /^(\/[^/]+)(\/.*)?$/;
  const match = input.match(regex);

  if (match) {
    return match[1];
  }

  return input;
}

export const getViewedDate = (date: number) => {
  if (date) {
    return dayjs.unix(date).format('D MMMM YYYY');
  }
};
