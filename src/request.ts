import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import deepmerge from "deepmerge";
import { fakeBrowserHeaders } from "./utils";

export async function request(url: string, options: Omit<AxiosRequestConfig, 'url'> = {}): Promise<SafeReturn<AxiosResponse>> {
  try {

    const response = await axios.request(deepmerge({
      url,
      method: "GET",
      headers: {
        ...fakeBrowserHeaders(),
        'Accept': "ext/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        'Connection': "keep-alive",
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        'X-Requested-With': "XMLHttpRequest"
      },
      timeout: 10000
    }, options))

    return { data: response }

  } catch (error) {
    return { error }
  }
}

export type SafeReturn<T, K = unknown> = LeastOne<{
  data: T,
  error: K
}>

export type LeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type RequestOptions = Omit<AxiosRequestConfig, 'url'>
