import { request, SafeReturn } from "../request"
import { GetMarketMapParams, MapDataRow, MapType } from "./types";
import { hEvenValidation } from "../utils";

export * from './types'


export async function getMarketMap(params: GetMarketMapParams): Promise<SafeReturn<MapDataRow[]>> {
   try {
      const { mapType = MapType.MarketValue, hEven = 0, market = 0, sector = 0, size = 1920 } = params

      if (hEven !== 0 && !hEvenValidation(hEven)) {
         return { error: new Error("Invalid hEven") }
      }

      const {
         data: response,
         error
      } = await request('http://cdn.tsetmc.com/api/ClosingPrice/GetMarketMap', {
         params: {
            market,
            sector,
            size,
            typeSelected: mapType,
            hEven
         }
      })

      if (error) return { error }
      if (!response) return ({ error: "No response" })

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
      }
   } catch (e) {
      return { error: e }
   }
}


export default {
   getMarketMap
}
