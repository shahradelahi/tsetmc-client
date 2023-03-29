import { AxiosRequestConfig, AxiosResponse } from "axios";
export declare function request(url: string, options?: Omit<AxiosRequestConfig, 'url'>): Promise<SafeReturn<AxiosResponse>>;
export type SafeReturn<T, K = any> = LeastOne<{
    data: T;
    error: K;
}>;
export type LeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
