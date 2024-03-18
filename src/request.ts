import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import deepmerge from 'deepmerge';
import { fakeBrowserHeaders } from './utils';
import { SafeReturn, trySafe } from 'p-safe';

export async function request(
  url: string,
  options: Omit<AxiosRequestConfig, 'url'> = {}
): Promise<SafeReturn<AxiosResponse>> {
  return trySafe(async () => {
    const response = await axios.request(
      deepmerge(
        {
          url,
          method: 'GET',
          headers: {
            ...fakeBrowserHeaders(),
            Accept:
              'ext/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'X-Requested-With': 'XMLHttpRequest'
          },
          timeout: 10000
        },
        options
      )
    );

    return { data: response };
  });
}

export type RequestOptions = Omit<AxiosRequestConfig, 'url'>;
