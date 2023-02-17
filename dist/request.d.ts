export declare function request<T = any>(params: RequestParams): Promise<Response<T>>;
interface RequestParams {
    url: string;
    method: string;
    headers?: Record<string, string | number>;
    query?: Record<string, string | number | boolean>;
    body?: string;
}
interface Response<T = any> {
    text: () => string;
    json: <O = any>() => O extends T ? O : T;
}
export {};
