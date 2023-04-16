import { GetDayDetailsCommonParams } from "../interface";
import { request, SafeReturn } from "../request";
import { even2JDate } from "../utils/timeUtils";

export default async function getPriceData(params: GetDayDetailsCommonParams): Promise<SafeReturn<PriceDataRow[]>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['closingPriceHistory']

      return {
         data: data.map((row: any) => ({
            time: even2JDate(dEven, row['hEven']),
            close: row['pClosing'],
            last: row['pDrCotVal'],
            value: row['qTotCap'],
            volume: row['qTotTran5J'],
            count: row['zTotTran']
         }))
      }
   } catch (error) {
      return { error }
   }
}

export interface PriceDataRow {
   time: Date
   close: number
   last: number
   value: number
   volume: number
   count: number
}
