import { RequestOptions, SafeReturn } from "../request";
import { GetDayDetailsCommonParams } from "../interface";
export default function getTrades(params: GetTradesParams, options?: RequestOptions): Promise<SafeReturn<TradeDataRow>>;
export interface GetTradesParams extends GetDayDetailsCommonParams {
    summarize: boolean;
}
export interface TradeDataRow {
    time: Date;
    price: number;
    volume: number;
}
