import { GetDayDetailsCommonParams } from "../interface";
import { RequestOptions, SafeReturn } from "../request";
export default function getTradersType(params: GetDayDetailsCommonParams, options?: RequestOptions): Promise<SafeReturn<TradersTypeData>>;
export interface TradersTypeData {
    legal: TradersTypeInfo;
    real: TradersTypeInfo;
}
export interface TradersTypeInfo {
    buy: TradersTypeSubInfo;
    sell: TradersTypeSubInfo;
}
export interface TradersTypeSubInfo {
    count: number;
    volume: number;
    value: number;
}
