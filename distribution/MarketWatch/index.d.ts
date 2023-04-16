export declare enum STATS_TRADES_INDICES {
    average_value_3_month = 0,
    average_value_12_month = 1,
    average_value_rank_3_month = 2,
    average_value_rank_12_month = 3,
    average_volume_3_month = 4,
    average_volume_12_month = 5,
    average_volume_rank_3_month = 6,
    average_volume_rank_12_month = 7,
    average_count_3_month = 8,
    average_count_12_month = 9,
    average_count_rank_3_month = 10,
    average_count_rank_12_month = 11,
    average_price_no_base_last_day = 12,
    average_price_with_base_last_day = 13,
    value_last_day = 14,
    volume_last_day = 15,
    count_last_day = 16
}
export declare enum STATS_NEGATIVE_DAYS_INDICES {
    days_count_3_month = 18,
    days_count_12_month = 19,
    days_percent_3_month = 20,
    days_percent_12_month = 21,
    days_rank_3_month = 22,
    days_rank_12_month = 23
}
export declare enum STATS_NO_TRADE_DAYS_INDICES {
    days_count_3_month = 24,
    days_count_12_month = 25
}
export declare enum STATS_WITH_TRADE_DAYS_INDICES {
    days_count_3_month = 32,
    days_count_12_month = 33,
    days_rank_3_month = 34,
    days_rank_12_month = 35
}
export declare enum STATS_COMPANY_VALUE_INDICES {
    total_value = 36,
    total_value_rank = 37
}
export declare enum STATS_CLOSED_DAYS_INDICES {
    days_count_3_month = 38,
    days_count_12_month = 39,
    days_percent_3_month = 40,
    days_percent_12_month = 41,
    days_rank_3_month = 42,
    days_rank_12_month = 43
}
export declare enum STATS_CLIENT_TYPE_INDICES {
    days_count_3_month = 44,
    days_count_12_month = 45,
    days_percent_3_month = 46,
    days_percent_12_month = 47,
    days_rank_3_month = 48,
    days_rank_12_month = 49
}
export declare enum STATS_CLIENT_TYPE_INDICES {
    individual_buy_average_volume_3_month = 50,
    individual_buy_average_volume_12_month = 51,
    individual_buy_average_volume_rank_3_month = 52,
    individual_buy_average_volume_rank_12_month = 53,
    legal_buy_average_volume_3_month = 54,
    legal_buy_average_volume_12_month = 55,
    legal_buy_average_volume_rank_3_month = 56,
    legal_buy_average_volume_rank_12_month = 57,
    individual_buy_average_count_3_month = 58,
    individual_buy_average_count_12_month = 59,
    individual_buy_average_count_rank_3_month = 60,
    individual_buy_average_count_rank_12_month = 61,
    legal_buy_average_count_3_month = 62,
    legal_buy_average_count_12_month = 63,
    legal_buy_average_count_rank_3_month = 64,
    legal_buy_average_count_rank_12_month = 65,
    total_buy_average_count_3_month = 66,
    total_buy_average_count_12_month = 67,
    total_buy_average_count_rank_3_month = 68,
    total_buy_average_count_rank_12_month = 69,
    individual_sell_average_volume_3_month = 70,
    individual_sell_average_volume_12_month = 71,
    individual_sell_average_volume_rank_3_month = 72,
    individual_sell_average_volume_rank_12_month = 73,
    legal_sell_average_volume_3_month = 74,
    legal_sell_average_volume_12_month = 75,
    legal_sell_average_volume_rank_3_month = 76,
    legal_sell_average_volume_rank_12_month = 77,
    individual_sell_average_count_3_month = 78,
    individual_sell_average_count_12_month = 79,
    individual_sell_average_count_rank_3_month = 80,
    individual_sell_average_count_rank_12_month = 81,
    legal_sell_average_count_3_month = 82,
    legal_sell_average_count_12_month = 83,
    legal_sell_average_count_rank_3_month = 84,
    legal_sell_average_count_rank_12_month = 85,
    total_sell_average_count_3_month = 86,
    total_sell_average_count_12_month = 87,
    total_sell_average_count_rank_3_month = 88,
    total_sell_average_count_rank_12_month = 89
}
export { default as getPriceData } from './getPriceData';
export type { GetWatchPriceParams, WatchPrice } from './getPriceData';
