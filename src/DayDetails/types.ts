export interface GetDayDetailsCommonParams {
   id: string
   dEven: number
}

export interface PriceOverviewData {
   priceChange: number
   low: number
   high: number
   yesterday: number
   open: number
   close: number
   last: number
   count: number
   volume: number
   value: number
}

export interface PriceDataRow {
   time: Date
   close: number
   last: number
   value: number
   volume: number
   count: number
}

export interface OrderBookRow {
   time: Date
   count: number
   price: number
   volume: number
}

export interface OrderBookDataRow {
   time: Date
   buyRows: OrderBookRow[]
   sellRows: OrderBookRow[]
}

export interface TradersTypeSubInfo {
   count: number
   volume: number
   value: number
}

export interface TradersTypeInfo {
   buy: TradersTypeSubInfo
   sell: TradersTypeSubInfo
}

export interface TradersTypeData {
   legal: TradersTypeInfo
   real: TradersTypeInfo
}

export interface GetTradesParams extends GetDayDetailsCommonParams {
   summarize: boolean
}

export interface TradeDataRow {
   time: Date
   price: number
   volume: number
}

export interface ThresholdsData {
   rangeMax: number
   rangeMin: number
}

export interface ShareHolder {
   id: string
   name: string
}

export interface ShareHolderDataRow {
   id: string
   date: Date
   shareholder: ShareHolder
   count: number
   percentage: number
}
