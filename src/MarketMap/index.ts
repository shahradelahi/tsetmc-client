import { request, SafeReturn } from "../request"
import { GetMarketMap, MapDataRow, MapType } from "./types";

export * from './types'


export async function getMarketMap(params: GetMarketMap): Promise<SafeReturn<MapDataRow[]>> {
   try {
      const { mapType = MapType.MarketValue, hEven = 0 } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/ClosingPrice/GetMarketMap?market=0&size=1920&sector=0&typeSelected=${mapType}&hEven=${hEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      return {
         data: response.data['marketMap'].map((row: any) => ({
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

