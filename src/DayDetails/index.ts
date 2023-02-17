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
import { request } from "../request";
import { even2JDate } from "../utils";

export * from './types'


export function getPriceOverviewData(params: GetDayDetailsCommonParams): Promise<PriceOverviewData> {
   return new Promise<PriceOverviewData>(async (resolve, reject) => {

      const { insId, dEven } = params

      const response = await request({
         url: `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/${insId}/${dEven}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['closingPriceDaily']

      resolve({
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
      })

   })
}

export function getPriceData(params: GetDayDetailsCommonParams): Promise<PriceDataRow[]> {
   return new Promise<PriceDataRow[]>(async (resolve, reject) => {

      const { insId, dEven } = params

      const response = await request({
         url: `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/${insId}/${dEven}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['closingPriceHistory']

      resolve(data.map((row: any) => ({
         time: even2JDate(dEven, row['hEven']),
         close: row['pClosing'],
         last: row['pDrCotVal'],
         value: row['qTotCap'],
         volume: row['qTotTran5J'],
         count: row['zTotTran']
      })))

   })
}

export async function getOrderBookData(params: GetDayDetailsCommonParams): Promise<OrderBookDataRow[]> {
   return new Promise<OrderBookDataRow[]>(async (resolve, reject) => {

      const { insId, dEven } = params

      const response = await request({
         url: `http://cdn.tsetmc.com/api/BestLimits/${insId}/${dEven}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['bestLimitsHistory']

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

      resolve(Object.keys(hevenMap).map(key => ({
         time: even2JDate(dEven, parseInt(key)),
         ...hevenMap[key]
      })))


   })
}

export async function getTrades(params: GetTradesParams): Promise<TradeDataRow> {
   return new Promise<TradeDataRow>(async (resolve, reject) => {

      const { insId, dEven, summarize } = params
      const summarizeStr = summarize ? 'true' : 'false'

      const response = await request({
         url: `http://cdn.tsetmc.com/api/Trade/GetTradeHistory/${insId}/${dEven}/${summarizeStr}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['tradeHistory']

      resolve(data.map((row: any) => ({
         time: even2JDate(dEven, row['hEven']),
         price: row['pTran'],
         volume: row['qTitTran']
      })))

   })
}

export async function getTradersType(params: GetDayDetailsCommonParams): Promise<TradersTypeData> {
   return new Promise<TradersTypeData>(async (resolve, reject) => {

      const { insId, dEven } = params

      const response = await request({
         url: `http://cdn.tsetmc.com/api/ClientType/GetClientTypeHistory/${insId}/${dEven}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['clientType']

      resolve({
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
      })

   })
}

export async function getThresholds(params: GetDayDetailsCommonParams): Promise<ThresholdsData> {
   return new Promise<ThresholdsData>(async (resolve, reject) => {

      const { insId, dEven } = params

      const response = await request({
         url: `http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/${insId}/${dEven}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['staticThreshold']

      resolve({
         rangeMax: data[1]['psGelStaMax'],
         rangeMin: data[1]['psGelStaMin']
      })

   })
}

export async function getShareholders(params: GetDayDetailsCommonParams): Promise<ShareHolderDataRow[]> {
   return new Promise<ShareHolderDataRow[]>(async (resolve, reject) => {

      const { insId, dEven } = params

      const response = await request({
         url: `http://cdn.tsetmc.com/api/Shareholder/${insId}/${dEven}`,
         method: "GET"
      }).catch(reject)

      if (!response) return

      const data = response.json()['shareShareholder']

      resolve(data.map((row: any) => ({
         date: even2JDate(dEven, row['dEven']),
         shareholder: {
            id: row['shareHolderId'].toString(),
            name: row['shareHolderName']
         },
         count: row['numberOfShares'],
         percentage: row['perOfShares']
      })))

   })
}
