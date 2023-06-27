import { RequestOptions, SafeReturn } from "../request";
export type GetIntraDayPriceChartParams = {
    insId: string;
};
export type IntraDayPriceChart = {
    time: Date;
    high: number;
    low: number;
    open: number;
    close: number;
    volume: number;
};
export default function getIntraDayPriceChart(params: GetIntraDayPriceChartParams, options?: RequestOptions): Promise<SafeReturn<IntraDayPriceChart[]>>;
