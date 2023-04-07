"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
exports.getShareholders = exports.getThresholds = exports.getTradersType = exports.getTrades = exports.getOrderBookData = exports.getPriceData = exports.getPriceOverviewData = void 0;
var request_1 = require("../request");
var utils_1 = require("../utils");
__exportStar(require("./types"), exports);
function getPriceOverviewData(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven, _a, response, error, data, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/".concat(insId, "/").concat(dEven))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['closingPriceDaily'];
                    return [2 /*return*/, {
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
                        }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPriceOverviewData = getPriceOverviewData;
function getPriceData(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven_1, _a, response, error, data, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven_1 = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/".concat(insId, "/").concat(dEven_1))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['closingPriceHistory'];
                    return [2 /*return*/, {
                            data: data.map(function (row) { return ({
                                time: (0, utils_1.even2JDate)(dEven_1, row['hEven']),
                                close: row['pClosing'],
                                last: row['pDrCotVal'],
                                value: row['qTotCap'],
                                volume: row['qTotTran5J'],
                                count: row['zTotTran']
                            }); })
                        }];
                case 2:
                    error_2 = _b.sent();
                    return [2 /*return*/, { error: error_2 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getPriceData = getPriceData;
function getOrderBookData(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven_2, _a, response, error, data, prevData, hevenMap_1, _i, data_1, row, heven, t, buyRow, sellRow, index, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven_2 = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/BestLimits/".concat(insId, "/").concat(dEven_2))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['bestLimitsHistory'];
                    data.sort(function (a, b) {
                        if (a['hEven'] === b['hEven']) {
                            return a['number'] - b['number'];
                        }
                        return a['hEven'] - b['hEven'];
                    });
                    prevData = { buyRows: [], sellRows: [] };
                    hevenMap_1 = {};
                    for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                        row = data_1[_i];
                        heven = row['hEven'];
                        t = (0, utils_1.even2JDate)(dEven_2, heven);
                        buyRow = {
                            time: t,
                            count: row['zOrdMeDem'],
                            price: row['pMeDem'],
                            volume: row['qTitMeDem']
                        };
                        sellRow = {
                            time: t,
                            count: row['zOrdMeOf'],
                            price: row['pMeOf'],
                            volume: row['qTitMeOf']
                        };
                        index = row['number'] - 1;
                        if (!(heven in hevenMap_1)) {
                            hevenMap_1[heven] = __assign({}, prevData);
                        }
                        while (hevenMap_1[heven].buyRows.length < index + 1) {
                            hevenMap_1[heven].buyRows.push(null);
                        }
                        while (hevenMap_1[heven].sellRows.length < index + 1) {
                            hevenMap_1[heven].sellRows.push(null);
                        }
                        hevenMap_1[heven].buyRows[index] = buyRow;
                        hevenMap_1[heven].sellRows[index] = sellRow;
                        prevData = hevenMap_1[heven];
                    }
                    return [2 /*return*/, {
                            data: Object.keys(hevenMap_1).map(function (key) { return (__assign({ time: (0, utils_1.even2JDate)(dEven_2, parseInt(key)) }, hevenMap_1[key])); })
                        }];
                case 2:
                    e_1 = _b.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getOrderBookData = getOrderBookData;
function getTrades(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven_3, summarize, summarizeStr, _a, response, error, data, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven_3 = params.dEven, summarize = params.summarize;
                    summarizeStr = summarize ? 'true' : 'false';
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/Trade/GetTradeHistory/".concat(insId, "/").concat(dEven_3, "/").concat(summarizeStr))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['tradeHistory'];
                    return [2 /*return*/, {
                            data: data.map(function (row) { return ({
                                time: (0, utils_1.even2JDate)(dEven_3, row['hEven']),
                                price: row['pTran'],
                                volume: row['qTitTran']
                            }); })
                        }];
                case 2:
                    e_2 = _b.sent();
                    return [2 /*return*/, { error: e_2 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTrades = getTrades;
function getTradersType(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven, _a, response, error, data, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/ClientType/GetClientTypeHistory/".concat(insId, "/").concat(dEven))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['clientType'];
                    return [2 /*return*/, {
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
                        }];
                case 2:
                    e_3 = _b.sent();
                    return [2 /*return*/, { error: e_3 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTradersType = getTradersType;
function getThresholds(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven, _a, response, error, data, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/".concat(insId, "/").concat(dEven))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['staticThreshold'];
                    return [2 /*return*/, {
                            data: {
                                rangeMax: data[1]['psGelStaMax'],
                                rangeMin: data[1]['psGelStaMin']
                            }
                        }];
                case 2:
                    e_4 = _b.sent();
                    return [2 /*return*/, { error: e_4 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getThresholds = getThresholds;
function getShareholders(params) {
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven_4, _a, response, error, data, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven_4 = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/Shareholder/".concat(insId, "/").concat(dEven_4))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    data = response.data['shareShareholder'];
                    return [2 /*return*/, {
                            data: data.map(function (row) { return ({
                                date: (0, utils_1.even2JDate)(dEven_4, row['dEven']),
                                shareholder: {
                                    id: row['shareHolderId'].toString(),
                                    name: row['shareHolderName']
                                },
                                count: row['numberOfShares'],
                                percentage: row['perOfShares']
                            }); })
                        }];
                case 2:
                    e_5 = _b.sent();
                    return [2 /*return*/, { error: e_5 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getShareholders = getShareholders;
exports.default = {
    getPriceOverviewData: getPriceOverviewData,
    getPriceData: getPriceData,
    getOrderBookData: getOrderBookData,
    getTrades: getTrades,
    getTradersType: getTradersType,
    getThresholds: getThresholds,
    getShareholders: getShareholders
};
//# sourceMappingURL=index.js.map