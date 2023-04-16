import { GetDayDetailsCommonParams } from "../interface";
import { request, SafeReturn } from "../request";
import { even2JDate } from "../utils/timeUtils";

export default async function getOrderBook(params: GetDayDetailsCommonParams): Promise<SafeReturn<OrderBookDataRow[]>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/BestLimits/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['bestLimitsHistory']

      data.sort((a: any, b: any) => {
         if (a['hEven'] === b['hEven']) {
            return a['number'] - b['number']
         }
         return a['hEven'] - b['hEven']
      })

      let prevData: Omit<OrderBookDataRow, 'time'> = { buyRows: [], sellRows: [] }
      const hevenMap: { [key: string]: { buyRows: any[], sellRows: any[] } } = {}

      for (const row of data) {
         const heven = row['hEven']
         const t = even2JDate(dEven, heven)
         const buyRow: OrderBookData = {
            time: t,
            count: row['zOrdMeDem'],
            price: row['pMeDem'],
            volume: row['qTitMeDem']
         }
         const sellRow: OrderBookData = {
            time: t,
            count: row['zOrdMeOf'],
            price: row['pMeOf'],
            volume: row['qTitMeOf']
         }
         const index = row['number'] - 1

         if (!(heven in hevenMap)) {
            hevenMap[heven] = { ...prevData }
         }

         while (hevenMap[heven].buyRows.length < index + 1) {
            hevenMap[heven].buyRows.push(null)
         }

         while (hevenMap[heven].sellRows.length < index + 1) {
            hevenMap[heven].sellRows.push(null)
         }

         hevenMap[heven].buyRows[index] = buyRow
         hevenMap[heven].sellRows[index] = sellRow

         prevData = hevenMap[heven]
      }

      return {
         data: Object.keys(hevenMap).map(key => ({
            time: even2JDate(dEven, parseInt(key)),
            ...hevenMap[key]
         }))
      }
   } catch (e) {
      return { error: e }
   }
}

export interface OrderBookData {
   time: Date
   count: number
   price: number
   volume: number
}

export interface OrderBookDataRow {
   time: Date
   buyRows: OrderBookData[]
   sellRows: OrderBookData[]
}
