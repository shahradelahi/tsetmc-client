import { SafeReturn } from "../request";
export type WatchTradersType = {
    legal: TraderTypeData;
    real: TraderTypeData;
};
export type TraderTypeData = {
    buy: {
        volume: number;
        count: number;
    };
    sell: {
        volume: number;
        count: number;
    };
};
export type TraderType = 'legal' | 'real';
export type WatchTradersTypeData = {
    [symbolId: string]: WatchTradersType;
};
export default function getClientTypeAll(): Promise<SafeReturn<WatchTradersTypeData>>;
