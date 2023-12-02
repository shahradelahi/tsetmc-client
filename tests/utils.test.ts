import { describe, expect, test } from '@jest/globals';
import { utils } from '../src/index';
import deepmerge from 'deepmerge';
import { RequestOptions } from '../src/request';

describe('Utils', () => {
  test('hEven to time', async () => {
    expect(utils.hEven2Time(61043)).toEqual('06:10:43');
  });

  test('Deep Merge Request Options', async () => {
    const initialOptions: RequestOptions = {
      params: {
        h: 'hi',
        r: 'hello'
      }
    };

    const extendedOptions: RequestOptions = {
      params: {
        r: 'hi'
      },
      timeout: 1000
    };

    const mergedOptions = deepmerge<RequestOptions>(initialOptions, extendedOptions);

    expect(mergedOptions).toHaveProperty('params');
    expect(mergedOptions).toHaveProperty('timeout');
    expect(mergedOptions.params).toHaveProperty('h');
    expect(mergedOptions.params).toHaveProperty('r');
    expect(mergedOptions.params.r).toEqual('hi');
  });

  test('Convert Persian to Arabic', async () => {
    expect(utils.faToAr('ونوین')).toEqual('ونوين');
  });
});
