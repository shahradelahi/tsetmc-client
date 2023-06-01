import { request, SafeReturn } from "../request";
import { even2JDate } from "../utils/timeUtils";
import { GetDayDetailsCommonParams, SerializableRecord } from "../interface";

export default async function getTrades(params: GetTradesParams): Promise<SafeReturn<TradeDataRow>> {
   try {
      const { insId, dEven, summarize } = params
      const summarizeStr = summarize ? 'true' : 'false'

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/Trade/GetTradeHistory/${insId}/${dEven}/${summarizeStr}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['tradeHistory']

      return {
         data: data.map((row: SerializableRecord) => ({
            time: even2JDate(dEven, Number(row['hEven'])),
            price: row['pTran'],
            volume: row['qTitTran']
         }))
      }
   } catch (e) {
      return { error: e }
   }
}

export interface GetTradesParams extends GetDayDetailsCommonParams {
   summarize: boolean
}

export interface TradeDataRow {
   time: Date
   price: number
   volume: number
}
