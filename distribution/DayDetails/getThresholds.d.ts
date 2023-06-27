import { GetDayDetailsCommonParams } from "../interface";
import { RequestOptions, SafeReturn } from "../request";
export default function getThresholds(params: GetDayDetailsCommonParams, options?: RequestOptions): Promise<SafeReturn<ThresholdsData>>;
export interface ThresholdsData {
    rangeMax: number;
    rangeMin: number;
}
