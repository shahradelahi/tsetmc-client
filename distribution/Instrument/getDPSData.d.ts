import { RequestOptions, SafeReturn } from "../request";
export type GetDPSDataParams = {
    symbol: string;
};
export type DPSData = {
    publishDate: string;
    meetingDate: string;
    fiscalYear: string;
    profitAfterTax: string;
    profitToAllocate: string;
    profitAccumulated: string;
    cashProfitPerShare: string;
};
export default function getDPSData(params: GetDPSDataParams, options?: RequestOptions): Promise<SafeReturn<DPSData[]>>;
