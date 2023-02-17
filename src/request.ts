import NodeRequest, { CoreOptions } from "request";

export function request<T = any>(params: RequestParams): Promise<Response<T>> {
   return new Promise<Response>((resolve, reject) => {

      const options: CoreOptions = {
         method: params.method,
         headers: {
            'Accept': "ext/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            'Connection': "keep-alive",
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
            'X-Requested-With': "XMLHttpRequest",
            ...params.headers || {}
         },
         qs: params.query || {},
         body: params.body || undefined,
         timeout: 10000
      }

      NodeRequest(params.url, options, (error: any, response: any, body: any) => {
         if (error || response.statusCode !== 200) {
            reject(error);
         } else {
            resolve({
               text: () => body,
               json: () => JSON.parse(body)
            });
         }
      });

   })
}

interface RequestParams {
   url: string
   method: string
   headers?: Record<string, string | number>
   query?: Record<string, string | number | boolean>
   body?: string
}

interface Response<T = any> {
   text: () => string
   json: <O = any>() => O extends T ? O : T
}
