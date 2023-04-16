import { GetDayDetailsCommonParams } from "../interface";
import { SafeReturn } from "../request";
export default function getPriceData(params: GetDayDetailsCommonParams): Promise<SafeReturn<PriceDataRow[]>>;
export interface PriceDataRow {
    time: Date;
    close: number;
    last: number;
    value: number;
    volume: number;
    count: number;
}
