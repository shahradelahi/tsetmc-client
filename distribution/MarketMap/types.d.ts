export declare enum MapType {
    MarketValue = 1,
    MarketVolume = 2
}
export interface GetMarketMapParams {
    mapType: MapType;
    hEven?: number;
    sector?: number;
    market?: number;
    size?: number;
}
export interface MapDataRow {
    id: string;
    shortName: string;
    longName: string;
    close: number;
    last: number;
    volume: number;
    value: number;
    count: number;
    groupName: string;
    color: string;
    priceChangePercent: number;
    percent: number;
}
