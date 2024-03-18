import { utils } from 'tsetmc-client';
import deepmerge from 'deepmerge';
import { RequestOptions } from '@/request';
import { expect } from 'chai';

describe('Utils', () => {
  it('hEven to time', async () => {
    expect(utils.hEven2Time(61043)).to.eq('06:10:43');
  });

  it('Deep Merge Request Options', async () => {
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

    expect(mergedOptions).to.have.property('params');
    expect(mergedOptions).to.have.property('timeout');
    expect(mergedOptions.params).to.have.property('h');
    expect(mergedOptions.params).to.have.property('r');
    expect(mergedOptions.params.r).to.eq('hi');
  });

  it('Convert Persian to Arabic', async () => {
    expect(utils.faToAr('ونوین')).to.eq('ونوين');
  });
});
