import { request } from "../request"
import { GetMarketMap, MapDataRow, MapType } from "./types";

export * from './types'


export async function getMarketMap(params: GetMarketMap): Promise<MapDataRow[]> {

   const { mapType = MapType.MarketValue, hEven = 0 } = params

   const response = await request<MapDataRow[]>({
      url: 'http://cdn.tsetmc.com/api/ClosingPrice/GetMarketMap',
      method: "GET",
      query: {
         'market': 0,
         'size': 1920,
         'sector': 0,
         'typeSelected': mapType,
         'hEven': hEven
      }
   })

   const rawData = response.json()

   return rawData.map((row: any) => {
      return {
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
      }
   })
}

