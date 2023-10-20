"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWatchStatsRaw = exports.STATS_CLIENT_TYPE_INDICES = exports.STATS_CLOSED_DAYS_INDICES = exports.STATS_OPEN_DAYS_INDICES = exports.STATS_COMPANY_VALUE_INDICES = exports.STATS_WITH_TRADE_DAYS_INDICES = exports.STATS_POSITIVE_DAYS_INDICES = exports.STATS_NO_TRADE_DAYS_INDICES = exports.STATS_NEGATIVE_DAYS_INDICES = exports.STATS_TRADES_INDICES = void 0;
var request_1 = require("../request");
var STATS_TRADES_INDICES;
(function (STATS_TRADES_INDICES) {
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_value_3_month"] = 0] = "average_value_3_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_value_12_month"] = 1] = "average_value_12_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_value_rank_3_month"] = 2] = "average_value_rank_3_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_value_rank_12_month"] = 3] = "average_value_rank_12_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_volume_3_month"] = 4] = "average_volume_3_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_volume_12_month"] = 5] = "average_volume_12_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_volume_rank_3_month"] = 6] = "average_volume_rank_3_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_volume_rank_12_month"] = 7] = "average_volume_rank_12_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_count_3_month"] = 8] = "average_count_3_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_count_12_month"] = 9] = "average_count_12_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_count_rank_3_month"] = 10] = "average_count_rank_3_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_count_rank_12_month"] = 11] = "average_count_rank_12_month";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_price_no_base_last_day"] = 12] = "average_price_no_base_last_day";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["average_price_with_base_last_day"] = 13] = "average_price_with_base_last_day";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["value_last_day"] = 14] = "value_last_day";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["volume_last_day"] = 15] = "volume_last_day";
    STATS_TRADES_INDICES[STATS_TRADES_INDICES["count_last_day"] = 16] = "count_last_day"; // رتبه حجم خرید افراد حقیقی در 12 ماه گذشته
})(STATS_TRADES_INDICES || (exports.STATS_TRADES_INDICES = STATS_TRADES_INDICES = {}));
var STATS_NEGATIVE_DAYS_INDICES;
(function (STATS_NEGATIVE_DAYS_INDICES) {
    STATS_NEGATIVE_DAYS_INDICES[STATS_NEGATIVE_DAYS_INDICES["days_count_3_month"] = 18] = "days_count_3_month";
    STATS_NEGATIVE_DAYS_INDICES[STATS_NEGATIVE_DAYS_INDICES["days_count_12_month"] = 19] = "days_count_12_month";
    STATS_NEGATIVE_DAYS_INDICES[STATS_NEGATIVE_DAYS_INDICES["days_percent_3_month"] = 20] = "days_percent_3_month";
    STATS_NEGATIVE_DAYS_INDICES[STATS_NEGATIVE_DAYS_INDICES["days_percent_12_month"] = 21] = "days_percent_12_month";
    STATS_NEGATIVE_DAYS_INDICES[STATS_NEGATIVE_DAYS_INDICES["days_rank_3_month"] = 22] = "days_rank_3_month";
    STATS_NEGATIVE_DAYS_INDICES[STATS_NEGATIVE_DAYS_INDICES["days_rank_12_month"] = 23] = "days_rank_12_month"; // رتبه روزهای منفی در 12 ماه گذشته
})(STATS_NEGATIVE_DAYS_INDICES || (exports.STATS_NEGATIVE_DAYS_INDICES = STATS_NEGATIVE_DAYS_INDICES = {}));
var STATS_NO_TRADE_DAYS_INDICES;
(function (STATS_NO_TRADE_DAYS_INDICES) {
    STATS_NO_TRADE_DAYS_INDICES[STATS_NO_TRADE_DAYS_INDICES["days_count_3_month"] = 24] = "days_count_3_month";
    STATS_NO_TRADE_DAYS_INDICES[STATS_NO_TRADE_DAYS_INDICES["days_count_12_month"] = 25] = "days_count_12_month"; // روزهای بدون معامله در 12 ماه گذشته
})(STATS_NO_TRADE_DAYS_INDICES || (exports.STATS_NO_TRADE_DAYS_INDICES = STATS_NO_TRADE_DAYS_INDICES = {}));
var STATS_POSITIVE_DAYS_INDICES;
(function (STATS_POSITIVE_DAYS_INDICES) {
    STATS_POSITIVE_DAYS_INDICES[STATS_POSITIVE_DAYS_INDICES["days_count_3_month"] = 26] = "days_count_3_month";
    STATS_POSITIVE_DAYS_INDICES[STATS_POSITIVE_DAYS_INDICES["days_count_12_month"] = 27] = "days_count_12_month";
    STATS_POSITIVE_DAYS_INDICES[STATS_POSITIVE_DAYS_INDICES["days_percent_3_month"] = 28] = "days_percent_3_month";
    STATS_POSITIVE_DAYS_INDICES[STATS_POSITIVE_DAYS_INDICES["days_percent_12_month"] = 29] = "days_percent_12_month";
    STATS_POSITIVE_DAYS_INDICES[STATS_POSITIVE_DAYS_INDICES["days_rank_3_month"] = 30] = "days_rank_3_month";
    STATS_POSITIVE_DAYS_INDICES[STATS_POSITIVE_DAYS_INDICES["days_rank_12_month"] = 31] = "days_rank_12_month"; // رتبه روزهای مثبت در 12 ماه گذشته
})(STATS_POSITIVE_DAYS_INDICES || (exports.STATS_POSITIVE_DAYS_INDICES = STATS_POSITIVE_DAYS_INDICES = {}));
var STATS_WITH_TRADE_DAYS_INDICES;
(function (STATS_WITH_TRADE_DAYS_INDICES) {
    STATS_WITH_TRADE_DAYS_INDICES[STATS_WITH_TRADE_DAYS_INDICES["days_count_3_month"] = 32] = "days_count_3_month";
    STATS_WITH_TRADE_DAYS_INDICES[STATS_WITH_TRADE_DAYS_INDICES["days_count_12_month"] = 33] = "days_count_12_month";
    STATS_WITH_TRADE_DAYS_INDICES[STATS_WITH_TRADE_DAYS_INDICES["days_rank_3_month"] = 34] = "days_rank_3_month";
    STATS_WITH_TRADE_DAYS_INDICES[STATS_WITH_TRADE_DAYS_INDICES["days_rank_12_month"] = 35] = "days_rank_12_month"; // رتبه روزهای با معامله در 12 ماه گذشته
})(STATS_WITH_TRADE_DAYS_INDICES || (exports.STATS_WITH_TRADE_DAYS_INDICES = STATS_WITH_TRADE_DAYS_INDICES = {}));
var STATS_COMPANY_VALUE_INDICES;
(function (STATS_COMPANY_VALUE_INDICES) {
    STATS_COMPANY_VALUE_INDICES[STATS_COMPANY_VALUE_INDICES["total_value"] = 36] = "total_value";
    STATS_COMPANY_VALUE_INDICES[STATS_COMPANY_VALUE_INDICES["total_value_rank"] = 37] = "total_value_rank"; // رتبه ارزش شرکت در آخرین روز
})(STATS_COMPANY_VALUE_INDICES || (exports.STATS_COMPANY_VALUE_INDICES = STATS_COMPANY_VALUE_INDICES = {}));
var STATS_OPEN_DAYS_INDICES;
(function (STATS_OPEN_DAYS_INDICES) {
    STATS_OPEN_DAYS_INDICES[STATS_OPEN_DAYS_INDICES["days_count_3_month"] = 38] = "days_count_3_month";
    STATS_OPEN_DAYS_INDICES[STATS_OPEN_DAYS_INDICES["days_count_12_month"] = 39] = "days_count_12_month";
    STATS_OPEN_DAYS_INDICES[STATS_OPEN_DAYS_INDICES["days_percent_3_month"] = 40] = "days_percent_3_month";
    STATS_OPEN_DAYS_INDICES[STATS_OPEN_DAYS_INDICES["days_percent_12_month"] = 41] = "days_percent_12_month";
    STATS_OPEN_DAYS_INDICES[STATS_OPEN_DAYS_INDICES["days_rank_3_month"] = 42] = "days_rank_3_month";
    STATS_OPEN_DAYS_INDICES[STATS_OPEN_DAYS_INDICES["days_rank_12_month"] = 43] = "days_rank_12_month"; // رتبه روزهای باز در 12 ماه گذشته
})(STATS_OPEN_DAYS_INDICES || (exports.STATS_OPEN_DAYS_INDICES = STATS_OPEN_DAYS_INDICES = {}));
var STATS_CLOSED_DAYS_INDICES;
(function (STATS_CLOSED_DAYS_INDICES) {
    STATS_CLOSED_DAYS_INDICES[STATS_CLOSED_DAYS_INDICES["days_count_3_month"] = 38] = "days_count_3_month";
    STATS_CLOSED_DAYS_INDICES[STATS_CLOSED_DAYS_INDICES["days_count_12_month"] = 39] = "days_count_12_month";
    STATS_CLOSED_DAYS_INDICES[STATS_CLOSED_DAYS_INDICES["days_percent_3_month"] = 40] = "days_percent_3_month";
    STATS_CLOSED_DAYS_INDICES[STATS_CLOSED_DAYS_INDICES["days_percent_12_month"] = 41] = "days_percent_12_month";
    STATS_CLOSED_DAYS_INDICES[STATS_CLOSED_DAYS_INDICES["days_rank_3_month"] = 42] = "days_rank_3_month";
    STATS_CLOSED_DAYS_INDICES[STATS_CLOSED_DAYS_INDICES["days_rank_12_month"] = 43] = "days_rank_12_month"; // رتبه روزهای بسته در 12 ماه گذشته
})(STATS_CLOSED_DAYS_INDICES || (exports.STATS_CLOSED_DAYS_INDICES = STATS_CLOSED_DAYS_INDICES = {}));
var STATS_CLIENT_TYPE_INDICES;
(function (STATS_CLIENT_TYPE_INDICES) {
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["days_count_3_month"] = 44] = "days_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["days_count_12_month"] = 45] = "days_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["days_percent_3_month"] = 46] = "days_percent_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["days_percent_12_month"] = 47] = "days_percent_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["days_rank_3_month"] = 48] = "days_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["days_rank_12_month"] = 49] = "days_rank_12_month"; // میانگین حجم خرید حقوقی در 12 ماه گذشته
})(STATS_CLIENT_TYPE_INDICES || (exports.STATS_CLIENT_TYPE_INDICES = STATS_CLIENT_TYPE_INDICES = {}));
(function (STATS_CLIENT_TYPE_INDICES) {
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_volume_3_month"] = 50] = "individual_buy_average_volume_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_volume_12_month"] = 51] = "individual_buy_average_volume_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_volume_rank_3_month"] = 52] = "individual_buy_average_volume_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_volume_rank_12_month"] = 53] = "individual_buy_average_volume_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_volume_3_month"] = 54] = "legal_buy_average_volume_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_volume_12_month"] = 55] = "legal_buy_average_volume_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_volume_rank_3_month"] = 56] = "legal_buy_average_volume_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_volume_rank_12_month"] = 57] = "legal_buy_average_volume_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_count_3_month"] = 58] = "individual_buy_average_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_count_12_month"] = 59] = "individual_buy_average_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_count_rank_3_month"] = 60] = "individual_buy_average_count_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_buy_average_count_rank_12_month"] = 61] = "individual_buy_average_count_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_count_3_month"] = 62] = "legal_buy_average_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_count_12_month"] = 63] = "legal_buy_average_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_count_rank_3_month"] = 64] = "legal_buy_average_count_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_buy_average_count_rank_12_month"] = 65] = "legal_buy_average_count_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_buy_average_count_3_month"] = 66] = "total_buy_average_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_buy_average_count_12_month"] = 67] = "total_buy_average_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_buy_average_count_rank_3_month"] = 68] = "total_buy_average_count_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_buy_average_count_rank_12_month"] = 69] = "total_buy_average_count_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_volume_3_month"] = 70] = "individual_sell_average_volume_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_volume_12_month"] = 71] = "individual_sell_average_volume_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_volume_rank_3_month"] = 72] = "individual_sell_average_volume_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_volume_rank_12_month"] = 73] = "individual_sell_average_volume_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_volume_3_month"] = 74] = "legal_sell_average_volume_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_volume_12_month"] = 75] = "legal_sell_average_volume_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_volume_rank_3_month"] = 76] = "legal_sell_average_volume_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_volume_rank_12_month"] = 77] = "legal_sell_average_volume_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_count_3_month"] = 78] = "individual_sell_average_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_count_12_month"] = 79] = "individual_sell_average_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_count_rank_3_month"] = 80] = "individual_sell_average_count_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["individual_sell_average_count_rank_12_month"] = 81] = "individual_sell_average_count_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_count_3_month"] = 82] = "legal_sell_average_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_count_12_month"] = 83] = "legal_sell_average_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_count_rank_3_month"] = 84] = "legal_sell_average_count_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["legal_sell_average_count_rank_12_month"] = 85] = "legal_sell_average_count_rank_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_sell_average_count_3_month"] = 86] = "total_sell_average_count_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_sell_average_count_12_month"] = 87] = "total_sell_average_count_12_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_sell_average_count_rank_3_month"] = 88] = "total_sell_average_count_rank_3_month";
    STATS_CLIENT_TYPE_INDICES[STATS_CLIENT_TYPE_INDICES["total_sell_average_count_rank_12_month"] = 89] = "total_sell_average_count_rank_12_month";
})(STATS_CLIENT_TYPE_INDICES || (exports.STATS_CLIENT_TYPE_INDICES = STATS_CLIENT_TYPE_INDICES = {}));
function getWatchStatsRaw(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, response, error, watchData_1, sections, symbolId_1, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, request_1.request)('http://old.tsetmc.com/tsev2/data/InstValue.aspx?t=a', options)];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response || !response.data)
                        return [2 /*return*/, { error: 'NoData' }];
                    watchData_1 = {};
                    sections = response.data.split(';');
                    symbolId_1 = 'NaN';
                    sections.forEach(function (section) {
                        var row = section.split(',');
                        if (row.length === 3) {
                            symbolId_1 = row[0];
                            watchData_1[symbolId_1] = {};
                            row = row.slice(1);
                        }
                        if (symbolId_1 === 'NaN' || !row[1]) {
                            return;
                        }
                        var dataKey = parseInt(row[0]); // refers to the data type in above enums
                        // example: index is 59 then the data is the 59th data in the STATS_CLIENT_TYPE_INDICES
                        watchData_1[symbolId_1][dataKey] = row[1].includes('.') ? parseFloat(row[1]) : parseInt(row[1]);
                    });
                    return [2 /*return*/, { data: watchData_1 }];
                case 2:
                    e_1 = _b.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getWatchStatsRaw = getWatchStatsRaw;
function getWatchStats(options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, data_1, error, watchData_2, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getWatchStatsRaw(options)];
                case 1:
                    _a = _b.sent(), data_1 = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!data_1)
                        return [2 /*return*/, { error: 'NoData' }];
                    watchData_2 = {};
                    Object.keys(data_1).forEach(function (symbolId) {
                        var symbolData = data_1[symbolId];
                        var symbolStats = {
                            trades: null,
                            negative_days: null,
                            no_trade_days: null,
                            positive_days: null,
                            with_trade_days: null,
                            company_value: null,
                            open_days: null,
                            closed_days: null,
                            client_type: null
                        };
                        Object.keys(symbolData).forEach(function (dataKey) {
                            var numKey = parseInt(dataKey);
                            if (numKey in STATS_TRADES_INDICES) {
                                if (!symbolStats.trades)
                                    symbolStats.trades = {};
                                symbolStats.trades[STATS_TRADES_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_NEGATIVE_DAYS_INDICES) {
                                if (!symbolStats.negative_days)
                                    symbolStats.negative_days = {};
                                symbolStats.negative_days[STATS_NEGATIVE_DAYS_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_NO_TRADE_DAYS_INDICES) {
                                if (!symbolStats.no_trade_days)
                                    symbolStats.no_trade_days = {};
                                symbolStats.no_trade_days[STATS_NO_TRADE_DAYS_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_POSITIVE_DAYS_INDICES) {
                                if (!symbolStats.positive_days)
                                    symbolStats.positive_days = {};
                                symbolStats.positive_days[STATS_POSITIVE_DAYS_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_WITH_TRADE_DAYS_INDICES) {
                                if (!symbolStats.with_trade_days)
                                    symbolStats.with_trade_days = {};
                                symbolStats.with_trade_days[STATS_WITH_TRADE_DAYS_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_COMPANY_VALUE_INDICES) {
                                if (!symbolStats.company_value)
                                    symbolStats.company_value = {};
                                symbolStats.company_value[STATS_COMPANY_VALUE_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_OPEN_DAYS_INDICES) {
                                if (!symbolStats.open_days)
                                    symbolStats.open_days = {};
                                symbolStats.open_days[STATS_OPEN_DAYS_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_CLOSED_DAYS_INDICES) {
                                if (!symbolStats.closed_days)
                                    symbolStats.closed_days = {};
                                symbolStats.closed_days[STATS_CLOSED_DAYS_INDICES[numKey]] = symbolData[numKey];
                            }
                            if (numKey in STATS_CLIENT_TYPE_INDICES) {
                                if (!symbolStats.client_type)
                                    symbolStats.client_type = {};
                                symbolStats.client_type[STATS_CLIENT_TYPE_INDICES[numKey]] = symbolData[numKey];
                            }
                        });
                        watchData_2[symbolId] = symbolStats;
                    });
                    return [2 /*return*/, { data: watchData_2 }];
                case 2:
                    e_2 = _b.sent();
                    return [2 /*return*/, { error: e_2 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = getWatchStats;
//# sourceMappingURL=getWatchStats.js.map