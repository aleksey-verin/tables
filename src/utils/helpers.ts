import dayjs from 'dayjs';

export function extractPath(input: string): string {
  const regex = /^(\/[^/]+)(\/.*)?$/;
  const match = input.match(regex);

  if (match) {
    return match[1];
  }

  return input;
}

export const getViewedDate = (date: number): string | undefined => {
  if (date && typeof date === 'number') {
    return dayjs.unix(date).format('D MMMM YYYY');
  }
};
