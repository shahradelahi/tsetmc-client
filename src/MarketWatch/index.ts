export enum STATS_TRADES_INDICES {
  average_value_3_month = 0, // میانگین حجم خرید افراد حقیقی در 3 ماه گذشته
  average_value_12_month = 1, // میانگین حجم خرید افراد حقیقی در 12 ماه گذشته
  average_value_rank_3_month = 2, // رتبه حجم خرید افراد حقیقی در 3 ماه گذشته
  average_value_rank_12_month = 3, // رتبه حجم خرید افراد حقیقی در 12 ماه گذشته
  average_volume_3_month = 4, // میانگین حجم خرید افراد حقیقی در 3 ماه گذشته
  average_volume_12_month = 5, // میانگین حجم خرید افراد حقیقی در 12 ماه گذشته
  average_volume_rank_3_month = 6, // رتبه حجم خرید افراد حقیقی در 3 ماه گذشته
  average_volume_rank_12_month = 7, // رتبه حجم خرید افراد حقیقی در 12 ماه گذشته
  average_count_3_month = 8, // میانگین حجم خرید افراد حقیقی در 3 ماه گذشته
  average_count_12_month = 9, // میانگین حجم خرید افراد حقیقی در 12 ماه گذشته
  average_count_rank_3_month = 10, // رتبه حجم خرید افراد حقیقی در 3 ماه گذشته
  average_count_rank_12_month = 11, // رتبه حجم خرید افراد حقیقی در 12 ماه گذشته
  average_price_no_base_last_day = 12, // میانگین حجم خرید افراد حقیقی در 3 ماه گذشته
  average_price_with_base_last_day = 13, // میانگین حجم خرید افراد حقیقی در 12 ماه گذشته
  value_last_day = 14, // رتبه حجم خرید افراد حقیقی در 3 ماه گذشته
  volume_last_day = 15, // رتبه حجم خرید افراد حقیقی در 12 ماه گذشته
  count_last_day = 16 // رتبه حجم خرید افراد حقیقی در 12 ماه گذشته
}

export enum STATS_NEGATIVE_DAYS_INDICES {
  days_count_3_month = 18,  // تعداد روزهای منفی در 3 ماه گذشته
  days_count_12_month = 19,  // تعداد روزهای منفی در 12 ماه گذشته
  days_percent_3_month = 20,  // درصد روزهای منفی در 3 ماه گذشته
  days_percent_12_month = 21,  // درصد روزهای منفی در 12 ماه گذشته
  days_rank_3_month = 22,  // رتبه روزهای منفی در 3 ماه گذشته
  days_rank_12_month = 23  // رتبه روزهای منفی در 12 ماه گذشته
}

export enum STATS_NO_TRADE_DAYS_INDICES {
  days_count_3_month = 24,  // روزهای بدون معامله در 3 ماه گذشته
  days_count_12_month = 25  // روزهای بدون معامله در 12 ماه گذشته
}

export enum STATS_WITH_TRADE_DAYS_INDICES {
  days_count_3_month = 32,  // روزهای با معامله در 3 ماه گذشته
  days_count_12_month = 33,  // روزهای با معامله در 12 ماه گذشته
  days_rank_3_month = 34,  // رتبه روزهای با معامله در 3 ماه گذشته
  days_rank_12_month = 35  // رتبه روزهای با معامله در 12 ماه گذشته
}

export enum STATS_COMPANY_VALUE_INDICES {
  total_value = 36,  // ارزش شرکت در آخرین روز
  total_value_rank = 37  // رتبه ارزش شرکت در آخرین روز
}

export enum STATS_CLOSED_DAYS_INDICES {
  days_count_3_month = 38,  // تعداد روزهای بسته در 3 ماه گذشته
  days_count_12_month = 39,  // تعداد روزهای بسته در 12 ماه گذشته
  days_percent_3_month = 40,  // درصد روزهای بسته در 3 ماه گذشته
  days_percent_12_month = 41,  // درصد روزهای بسته در 12 ماه گذشته
  days_rank_3_month = 42,  // رتبه روزهای بسته در 3 ماه گذشته
  days_rank_12_month = 43  // رتبه روزهای بسته در 12 ماه گذشته
}

export enum STATS_CLIENT_TYPE_INDICES {
  days_count_3_month = 44,  // میانگین حجم خرید حقیقی در 3 ماه گذشته
  days_count_12_month = 45,  // میانگین حجم خرید حقیقی در 12 ماه گذشته
  days_percent_3_month = 46,  // رتبه حجم خرید حقیقی در 3 ماه گذشته
  days_percent_12_month = 47,  // رتبه حجم خرید حقیقی در 12 ماه گذشته
  days_rank_3_month = 48,  // میانگین حجم خرید حقوقی در 3 ماه گذشته
  days_rank_12_month = 49  // میانگین حجم خرید حقوقی در 12 ماه گذشته
}

export enum STATS_CLIENT_TYPE_INDICES {
  individual_buy_average_volume_3_month = 50, // میانگین حجم خرید حقیقی در 3 ماه گذشته
  individual_buy_average_volume_12_month = 51, // میانگین حجم خرید حقیقی در 12 ماه گذشته
  individual_buy_average_volume_rank_3_month = 52, // رتبه حجم خرید حقیقی در 3 ماه گذشته
  individual_buy_average_volume_rank_12_month = 53, // رتبه حجم خرید حقیقی در 12 ماه گذشته
  legal_buy_average_volume_3_month = 54, // میانگین حجم خرید حقوقی در 3 ماه گذشته
  legal_buy_average_volume_12_month = 55, // میانگین حجم خرید حقوقی در 12 ماه گذشته
  legal_buy_average_volume_rank_3_month = 56, // رتبه حجم خرید حقوقی در 3 ماه گذشته
  legal_buy_average_volume_rank_12_month = 57, // رتبه حجم خرید حقوقی در 12 ماه گذشته
  individual_buy_average_count_3_month = 58, // میانگین تعداد خریدار حقیقی در 3 ماه گذشته
  individual_buy_average_count_12_month = 59, // میانگین تعداد خریدار حقیقی در 12 ماه گذشته
  individual_buy_average_count_rank_3_month = 60, // رتبه تعداد خریدار حقیقی در 3 ماه گذشته
  individual_buy_average_count_rank_12_month = 61, // رتبه تعداد خریدار حقیقی در 12 ماه گذشته
  legal_buy_average_count_3_month = 62, // میانگین تعداد خریدار حقوقی در 3 ماه گذشته
  legal_buy_average_count_12_month = 63, // میانگین تعداد خریدار حقوقی در 12 ماه گذشته
  legal_buy_average_count_rank_3_month = 64, // رتبه تعداد خریدار حقوقی در 3 ماه گذشته
  legal_buy_average_count_rank_12_month = 65, // رتبه تعداد خریدار حقوقی در 12 ماه گذشته
  total_buy_average_count_3_month = 66, // میانگین تعداد خریداران در 3 ماه گذشته
  total_buy_average_count_12_month = 67, // میانگین تعداد خریداران در 12 ماه گذشته
  total_buy_average_count_rank_3_month = 68, // رتبه تعداد خریداران در 3 ماه گذشته
  total_buy_average_count_rank_12_month = 69, // رتبه تعداد خریداران در 12 ماه گذشته
  individual_sell_average_volume_3_month = 70, // میانگین حجم فروش حقیقی در 3 ماه گذشته
  individual_sell_average_volume_12_month = 71, // میانگین حجم فروش حقیقی در 12 ماه گذشته
  individual_sell_average_volume_rank_3_month = 72, // رتبه حجم فروش حقیقی در 3 ماه گذشته
  individual_sell_average_volume_rank_12_month = 73, // رتبه حجم فروش حقیقی در 12 ماه گذشته
  legal_sell_average_volume_3_month = 74, // میانگین حجم فروش حقوقی در 3 ماه گذشته
  legal_sell_average_volume_12_month = 75, // میانگین حجم فروش حقوقی در 12 ماه گذشته
  legal_sell_average_volume_rank_3_month = 76, // رتبه حجم فروش حقوقی در 3 ماه گذشته
  legal_sell_average_volume_rank_12_month = 77, // رتبه حجم فروش حقوقی در 12 ماه گذشته
  individual_sell_average_count_3_month = 78, // میانگین تعداد فروشنده حقیقی در 3 ماه گذشته
  individual_sell_average_count_12_month = 79, // میانگین تعداد فروشنده حقیقی در 12 ماه گذشته
  individual_sell_average_count_rank_3_month = 80, // رتبه تعداد فروشنده حقیقی در 3 ماه گذشته
  individual_sell_average_count_rank_12_month = 81, // رتبه تعداد فروشنده حقیقی در 12 ماه گذشته
  legal_sell_average_count_3_month = 82, // میانگین تعداد فروشنده حقوقی در 3 ماه گذشته
  legal_sell_average_count_12_month = 83, // میانگین تعداد فروشنده حقوقی در 12 ماه گذشته
  legal_sell_average_count_rank_3_month = 84, // رتبه تعداد فروشنده حقوقی در 3 ماه گذشته
  legal_sell_average_count_rank_12_month = 85, // رتبه تعداد فروشنده حقوقی در 12 ماه گذشته
  total_sell_average_count_3_month = 86, // میانگین تعداد فروشندگان در 3 ماه گذشته
  total_sell_average_count_12_month = 87, // میانگین تعداد فروشندگان در 12 ماه گذشته
  total_sell_average_count_rank_3_month = 88, // رتبه تعداد فروشندگان در 3 ماه گذشته
  total_sell_average_count_rank_12_month = 89, // رتبه تعداد فروشندگان در 12 ماه گذشته
}

export { default as getPriceData } from './getPriceData'
export type { GetWatchPriceParams, WatchPrice } from './getPriceData'

