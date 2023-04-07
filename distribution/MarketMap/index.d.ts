import { SafeReturn } from "../request";
import { GetMarketMapParams, MapDataRow } from "./types";
export * from './types';
export declare function getMarketMap(params: GetMarketMapParams): Promise<SafeReturn<MapDataRow[]>>;
declare const _default: {
    getMarketMap: typeof getMarketMap;
};
export default _default;
