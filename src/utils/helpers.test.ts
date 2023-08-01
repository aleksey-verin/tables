import { describe, expect, it } from 'vitest';
import { getViewedDate } from './helpers';

describe('fn getShortString', () => {
  it('Принимает timestamp, получает строку "DD MMMM YYYY"', () => {
    expect(getViewedDate(1690889876)).toEqual('1 August 2023');
  });
});
