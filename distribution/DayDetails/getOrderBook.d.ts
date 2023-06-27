import { GetDayDetailsCommonParams } from "../interface";
import { RequestOptions, SafeReturn } from "../request";
export default function getOrderBook(params: GetDayDetailsCommonParams, options?: RequestOptions): Promise<SafeReturn<OrderBookDataRow[]>>;
export interface OrderBookData {
    time: Date;
    count: number;
    price: number;
    volume: number;
}
export interface OrderBookDataRow {
    time: Date;
    buyRows: OrderBookData[];
    sellRows: OrderBookData[];
}
