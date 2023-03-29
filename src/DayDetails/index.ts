import {
   GetDayDetailsCommonParams,
   GetTradesParams,
   OrderBookDataRow,
   OrderBookRow,
   PriceDataRow,
   PriceOverviewData,
   ShareHolderDataRow,
   ThresholdsData,
   TradeDataRow,
   TradersTypeData
} from "./types";
import { request, SafeReturn } from "../request";
import { even2JDate } from "../utils";

export * from './types'


export async function getPriceOverviewData(params: GetDayDetailsCommonParams): Promise<SafeReturn<PriceOverviewData>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['closingPriceDaily']

      return {
         data: {
            priceChange: data["priceChange"],
            low: data["priceMin"],
            high: data["priceMax"],
            yesterday: data["priceYesterday"],
            open: data["priceFirst"],
            close: data["pClosing"],
            last: data["pDrCotVal"],
            count: data["zTotTran"],
            volume: data["qTotTran5J"],
            value: data["qTotCap"]
         }
      }
   } catch (error) {
      return { error }
   }
}

export async function getPriceData(params: GetDayDetailsCommonParams): Promise<SafeReturn<PriceDataRow[]>> {
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

export async function getOrderBookData(params: GetDayDetailsCommonParams): Promise<SafeReturn<OrderBookDataRow[]>> {
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
         const buyRow: OrderBookRow = {
            time: t,
            count: row['zOrdMeDem'],
            price: row['pMeDem'],
            volume: row['qTitMeDem']
         }
         const sellRow: OrderBookRow = {
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

export async function getTrades(params: GetTradesParams): Promise<SafeReturn<TradeDataRow>> {
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
         data: data.map((row: any) => ({
            time: even2JDate(dEven, row['hEven']),
            price: row['pTran'],
            volume: row['qTitTran']
         }))
      }
   } catch (e) {
      return { error: e }
   }
}

export async function getTradersType(params: GetDayDetailsCommonParams): Promise<SafeReturn<TradersTypeData>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/ClientType/GetClientTypeHistory/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['clientType']

      return {
         data: {
            legal: {
               buy: {
                  volume: data['buy_N_Volume'],
                  value: data['buy_N_Value'],
                  count: data['buy_N_Count']
               },
               sell: {
                  volume: data['sell_N_Volume'],
                  value: data['sell_N_Value'],
                  count: data['sell_N_Count']
               }
            },
            real: {
               buy: {
                  volume: data['buy_I_Volume'],
                  value: data['buy_I_Value'],
                  count: data['buy_I_Count']
               },
               sell: {
                  volume: data['sell_I_Volume'],
                  value: data['sell_I_Value'],
                  count: data['sell_I_Count']
               }
            }
         }
      }
   } catch (e) {
      return { error: e }
   }
}

export async function getThresholds(params: GetDayDetailsCommonParams): Promise<SafeReturn<ThresholdsData>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['staticThreshold']

      return {
         data: {
            rangeMax: data[1]['psGelStaMax'],
            rangeMin: data[1]['psGelStaMin']
         }
      }
   } catch (e) {
      return { error: e }
   }
}

export async function getShareholders(params: GetDayDetailsCommonParams): Promise<SafeReturn<ShareHolderDataRow[]>> {
   try {
      const { insId, dEven } = params

      const {
         data: response,
         error
      } = await request(`http://cdn.tsetmc.com/api/Shareholder/${insId}/${dEven}`)

      if (error) return { error }
      if (!response) return ({ error: "No response" })

      const data = response.data['shareShareholder']

      return {
         data: data.map((row: any) => ({
            date: even2JDate(dEven, row['dEven']),
            shareholder: {
               id: row['shareHolderId'].toString(),
               name: row['shareHolderName']
            },
            count: row['numberOfShares'],
            percentage: row['perOfShares']
         }))
      }
   } catch (e) {
      return { error: e }
   }
}
