import { RequestOptions, SafeReturn } from "../request";
export type GetWatchPriceParams = {
    refId: string;
    hEven: string;
};
export default function getWatchPrice(params?: GetWatchPriceParams, options?: RequestOptions): Promise<SafeReturn<WatchPrice[]>>;
export type WatchPrice = {
    symbolId: string;
    isin: string;
    shortName: string;
    fullName: string;
    heven: number;
    open: number;
    close: number;
    last: number;
    count: number;
    volume: number;
    value: number;
    low: number;
    high: number;
    yesterday: number;
    eps: number | null;
    baseVolume: number;
    visitCount: number;
    flow: number;
    group: number;
    rangeMax: number;
    rangeMin: number;
    z: number;
    yval: number;
    orderbook: {
        buyRows: OrderBookData[];
        sellRows: OrderBookData[];
    };
};
export interface OrderBookData {
    count: number;
    price: number;
    volume: number;
}
