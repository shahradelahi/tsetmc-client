import { GetDayDetailsCommonParams } from "../interface";
import { SafeReturn } from "../request";
export default function getShareholders(params: GetDayDetailsCommonParams): Promise<SafeReturn<ShareHolderDataRow[]>>;
export interface ShareHolder {
    id: string;
    name: string;
}
export interface ShareHolderDataRow {
    id: string;
    date: Date;
    shareholder: ShareHolder;
    count: number;
    percentage: number;
}
