export declare function deepUpdate(d1: Record<string, any>, d2: Record<string, any>): Record<string, any>;
export declare function omitNulls<T extends Record<string, any> = any>(obj: T): OmitNulls<T>;
type OmitNulls<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends null ? never : T[K];
};
export {};
