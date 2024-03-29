import { request, RequestOptions } from '@/request';
import { SafeReturn, trySafe } from 'p-safe';
import { hEvenValidation } from '@/utils';
import deepmerge from 'deepmerge';

export default async function getMarketMap(
  params: GetMarketMapParams,
  options: RequestOptions = {}
): Promise<SafeReturn<MapDataRow[]>> {
  return trySafe(async () => {
    const {
      mapType = MapType.MarketValue,
      hEven = 0,
      market = 0,
      sector = 0,
      size = 1920
    } = params;

    if (hEven !== 0 && !hEvenValidation(hEven)) {
      return { error: new Error('Invalid hEven') };
    }

    const { data: response, error } = await request(
      'http://cdn.tsetmc.com/api/ClosingPrice/GetMarketMap',
      deepmerge(
        {
          params: {
            market,
            sector,
            size,
            typeSelected: mapType,
            hEven
          }
        },
        options
      )
    );

    if (error) return { error };
    if (!response) return { error: new Error('NoData') };

    return {
      data: response.data.map((row: any) => ({
        id: row['insCode'],
        shortName: row['lVal18AFC'],
        longName: row['lVal30'],
        close: row['pClosing'],
        last: row['pDrCotVal'],
        volume: row['qTotTran5J'],
        value: row['qTotCap'],
        count: row['zTotTran'],
        groupName: row['lSecVal'],
        color: row['color'],
        priceChangePercent: row['priceChangePercent'],
        percent: row['percent']
      }))
    };
  });
}

export enum MapType {
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
