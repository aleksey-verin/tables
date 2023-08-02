import { describe, expect, it } from 'vitest';
import { getViewedDate } from './helpers';

describe('fn getShortString', () => {
  it('Принимаем timestamp, возвращаем строку с датой"', () => {
    expect(getViewedDate(1690914452)).toEqual('1 August 2023');
  });
  it('Принимаем timestamp, возвращаем строку с датой"', () => {
    expect(getViewedDate(1290914452)).toEqual('28 November 2010');
  });
  it('Ошибка. Принимаем undefined, возвращаем undefined"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getViewedDate(undefined)).toEqual(undefined);
  });
  it('Ошибка. Принимаем строку, возвращаем undefined"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getViewedDate('text')).toEqual(undefined);
  });
  it('Ошибка. Принимаем null, возвращаем undefined"', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getViewedDate(null)).toEqual(undefined);
  });
});
