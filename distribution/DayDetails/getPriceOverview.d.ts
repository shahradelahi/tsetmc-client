import { RequestOptions, SafeReturn } from "../request";
import { GetDayDetailsCommonParams } from "../interface";
export default function getPriceOverviewData(params: GetDayDetailsCommonParams, options?: RequestOptions): Promise<SafeReturn<PriceOverviewData>>;
export interface PriceOverviewData {
    priceChange: number;
    low: number;
    high: number;
    yesterday: number;
    open: number;
    close: number;
    last: number;
    count: number;
    volume: number;
    value: number;
}
