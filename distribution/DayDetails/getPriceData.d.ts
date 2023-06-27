import { GetDayDetailsCommonParams } from "../interface";
import { RequestOptions, SafeReturn } from "../request";
export default function getPriceData(params: GetDayDetailsCommonParams, options?: RequestOptions): Promise<SafeReturn<PriceDataRow[]>>;
export interface PriceDataRow {
    time: Date;
    close: number;
    last: number;
    value: number;
    volume: number;
    count: number;
}
