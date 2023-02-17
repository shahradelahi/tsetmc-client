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


export async function getPriceOverviewData(params: GetDayDetailsCommonParams): Promise<PriceOverviewData> {

   const { symbolId, dEven } = params

   const response = await request({
      url: `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/${symbolId}/${dEven}`,
      method: "GET"
   })

   const data = response.json()['closingPriceDaily']

   return {
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

export async function getPriceData(params: GetDayDetailsCommonParams): Promise<PriceDataRow[]> {

   const { symbolId, dEven } = params

   const response = await request({
      url: `http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/${symbolId}/${dEven}`,
      method: "GET"
   })

   const data = response.json()['closingPriceHistory']

   return data.map((row: any) => ({
      time: even2JDate(dEven, row['hEven']),
      close: row['pClosing'],
      last: row['pDrCotVal'],
      value: row['qTotCap'],
      volume: row['qTotTran5J'],
      count: row['zTotTran']
   }))

}

export async function getOrderBookData(params: GetDayDetailsCommonParams): Promise<OrderBookDataRow[]> {

   const { symbolId, dEven } = params

   const response = await request({
      url: `http://cdn.tsetmc.com/api/BestLimits/${symbolId}/${dEven}`,
      method: "GET"
   })

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

   return Object.keys(hevenMap).map(key => ({
      time: even2JDate(dEven, parseInt(key)),
      ...hevenMap[key]
   }))

}

export async function getTrades(params: GetTradesParams): Promise<TradeDataRow> {

   const { symbolId, dEven, summarize } = params
   const summarizeStr = summarize ? 'true' : 'false'

   const response = await request({
      url: `http://cdn.tsetmc.com/api/Trade/GetTradeHistory/${symbolId}/${dEven}/${summarizeStr}`,
      method: "GET"
   })

   const data = response.json()['tradeHistory']

   return data.map((row: any) => ({
      time: even2JDate(dEven, row['hEven']),
      price: row['pTran'],
      volume: row['qTitTran']
   }))

}

export async function getTradersType(params: GetDayDetailsCommonParams): Promise<TradersTypeData> {

   const { symbolId, dEven } = params

   const response = await request({
      url: `http://cdn.tsetmc.com/api/ClientType/GetClientTypeHistory/${symbolId}/${dEven}`,
      method: "GET"
   })

   const data = response.json()['clientType']

   return {
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

export async function getThresholds(params: GetDayDetailsCommonParams): Promise<ThresholdsData> {

   const { symbolId, dEven } = params

   const response = await request({
      url: `http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/${symbolId}/${dEven}`,
      method: "GET"
   })

   const data = response.json()['staticThreshold']

   return {
      rangeMax: data[1]['psGelStaMax'],
      rangeMin: data[1]['psGelStaMin']
   }

}

export async function getShareholders(params: GetDayDetailsCommonParams): Promise<ShareHolderDataRow[]> {

   const { symbolId, dEven } = params

   const response = await request({
      url: `http://cdn.tsetmc.com/api/Shareholder/${symbolId}/${dEven}`,
      method: "GET"
   })

   const data = response.json()['shareShareholder']

   return data.map((row: any) => ({
      date: even2JDate(dEven, row['dEven']),
      shareholder: {
         id: row['shareHolderId'].toString(),
         name: row['shareHolderName']
      },
      count: row['numberOfShares'],
      percentage: row['perOfShares']
   }))

}
