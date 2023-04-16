import { GetDayDetailsCommonParams } from "../interface";
import { SafeReturn } from "../request";
export default function getThresholds(params: GetDayDetailsCommonParams): Promise<SafeReturn<ThresholdsData>>;
export interface ThresholdsData {
    rangeMax: number;
    rangeMin: number;
}
