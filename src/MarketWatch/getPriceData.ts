import { request, SafeReturn } from "../request";

export type GetWatchPriceParams = {
   refId: string
   hEven: string
}

export default async function getWatchPrice(params?: GetWatchPriceParams): Promise<SafeReturn<WatchPrice[]>> {
   try {

      const { refId = 0, hEven = 0 } = params || {}

      const {
         data: response,
         error
      } = await request('http://old.tsetmc.com/tsev2/data/MarketWatchPlus.aspx', {
         params: {
            h: hEven,
            r: refId
         }
      })

      if (error) return { error }
      if (!response || !response.data) return { error: 'NoData' }

      const data = response.data

      const sections = data.split('@')

      let maxHeven = 0
      const watchData: Record<string, Partial<WatchPrice>> = {}

      // prices
      const rows = sections[2].split(';')
      for (const row of rows) {
         if (!row) continue

         const cols = row.split(',')
         if (cols.length === 0 || cols.length === 10) continue

         const symbolId = cols[0]
         const heven = parseInt(cols[4])

         watchData[symbolId] = {
            symbolId: cols[0],
            isin: cols[1],
            shortName: cols[2],
            fullName: cols[3],
            heven: parseInt(cols[4]),
            open: parseInt(cols[5]),
            close: parseInt(cols[6]),
            last: parseInt(cols[7]),
            count: parseInt(cols[8]),
            volume: parseInt(cols[9]),
            value: parseInt(cols[10]),
            low: parseInt(cols[11]),
            high: parseInt(cols[12]),
            yesterday: parseInt(cols[13]),
            eps: parseInt(cols[14]) || null,
            baseVolume: parseInt(cols[15]),
            visitCount: parseInt(cols[16]),
            flow: parseInt(cols[17]),
            group: parseInt(cols[18]),
            rangeMax: parseInt(cols[19]),
            rangeMin: parseInt(cols[20]),
            z: parseInt(cols[21]),
            yval: parseInt(cols[22]),
            orderbook: {
               buyRows: [],
               sellRows: []
            }
         }

         if (heven > maxHeven) {
            maxHeven = heven
         }
      }

      // orderbook
      const orderbookRows = sections[3].split(';')
      for (const row of orderbookRows) {
         if (!row) {
            continue
         }

         const [ symbolId, rank, sCount, bCount, bPrice, sPrice, bVolume, sVolume ] = row.split(',')

         const orderbook = watchData[symbolId].orderbook || {
            buyRows: [],
            sellRows: []
         }

         orderbook.buyRows[rank] = {
            count: parseInt(bCount),
            price: parseInt(bPrice),
            volume: parseInt(bVolume)
         }

         orderbook.sellRows[rank] = {
            count: parseInt(sCount),
            price: parseInt(sPrice),
            volume: parseInt(sVolume)
         }

         watchData[symbolId].orderbook = orderbook
      }

      const result: WatchPrice[] = []

      for (const key in watchData) {

         const dataRow = watchData[key]

         if (!dataRow.symbolId) {
            continue
         }

         const orderbook = watchData[key].orderbook || {
            buyRows: [],
            sellRows: []
         }

         result.push({
            symbolId: watchData[key].symbolId,
            isin: watchData[key].isin,
            shortName: watchData[key].shortName,
            fullName: watchData[key].fullName,
            heven: watchData[key].heven,
            open: watchData[key].open,
            close: watchData[key].close,
            last: watchData[key].last,
            count: watchData[key].count,
            volume: watchData[key].volume,
            value: watchData[key].value,
            low: watchData[key].low,
            high: watchData[key].high,
            yesterday: watchData[key].yesterday,
            eps: watchData[key].eps,
            baseVolume: watchData[key].baseVolume,
            visitCount: watchData[key].visitCount,
            flow: watchData[key].flow,
            group: watchData[key].group,
            rangeMax: watchData[key].rangeMax,
            rangeMin: watchData[key].rangeMin,
            z: watchData[key].z,
            yval: watchData[key].yval,
            orderbook: {
               buyRows: Object.values(orderbook.buyRows),
               sellRows: Object.values(orderbook.sellRows)
            }
         } as WatchPrice)
      }

      return { data: result }


   } catch (e) {
      return { error: e }
   }
}

export type WatchPrice = {
   symbolId: string
   isin: string
   shortName: string
   fullName: string
   heven: number
   open: number
   close: number
   last: number
   count: number
   volume: number
   value: number
   low: number
   high: number
   yesterday: number
   eps: number | null
   baseVolume: number
   visitCount: number
   flow: number
   group: number
   rangeMax: number
   rangeMin: number
   z: number
   yval: number
   orderbook: {
      buyRows: OrderBookData[]
      sellRows: OrderBookData[]
   }
}

export interface OrderBookData {
   count: number
   price: number
   volume: number
}
