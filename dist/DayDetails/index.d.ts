import { OrderBookDataRow, PriceDataRow, PriceOverviewData, ThresholdsData, TradeDataRow, TradersTypeData, GetDayDetailsCommonParams, GetTradesParams, ShareHolderDataRow } from "./types";
export * from './types';
export declare function getPriceOverviewData(params: GetDayDetailsCommonParams): Promise<PriceOverviewData>;
export declare function getPriceData(params: GetDayDetailsCommonParams): Promise<PriceDataRow[]>;
export declare function getOrderBookData(params: GetDayDetailsCommonParams): Promise<OrderBookDataRow[]>;
export declare function getTrades(params: GetTradesParams): Promise<TradeDataRow>;
export declare function getTradersType(params: GetDayDetailsCommonParams): Promise<TradersTypeData>;
export declare function getThresholds(params: GetDayDetailsCommonParams): Promise<ThresholdsData>;
export declare function getShareholders(params: GetDayDetailsCommonParams): Promise<ShareHolderDataRow[]>;
