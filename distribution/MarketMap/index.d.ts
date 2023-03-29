import { SafeReturn } from "../request";
import { GetMarketMap, MapDataRow } from "./types";
export * from './types';
export declare function getMarketMap(params: GetMarketMap): Promise<SafeReturn<MapDataRow[]>>;
