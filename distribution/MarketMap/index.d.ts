import { SafeReturn } from "../request";
import { GetMarketMap, MapDataRow } from "./types";
export * from './types';
export declare function getMarketMap(params: GetMarketMap): Promise<SafeReturn<MapDataRow[]>>;
declare const _default: {
    getMarketMap: typeof getMarketMap;
};
export default _default;
