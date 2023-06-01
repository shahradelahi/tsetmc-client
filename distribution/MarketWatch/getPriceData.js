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
var request_1 = require("../request");
function getWatchPrice(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, refId, _d, hEven, _e, response, error, data, sections, maxHeven, watchData, rows, _i, rows_1, row, cols, symbolId, heven, orderbookRows, _f, orderbookRows_1, row, _g, symbolId, rank, sCount, bCount, bPrice, sPrice, bVolume, sVolume, result, key, dataRow, e_1;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _h.trys.push([0, 2, , 3]);
                    _b = params || {}, _c = _b.refId, refId = _c === void 0 ? 0 : _c, _d = _b.hEven, hEven = _d === void 0 ? 0 : _d;
                    return [4 /*yield*/, (0, request_1.request)('http://old.tsetmc.com/tsev2/data/MarketWatchPlus.aspx', {
                            params: {
                                h: hEven,
                                r: refId
                            }
                        })];
                case 1:
                    _e = _h.sent(), response = _e.data, error = _e.error;
                    console.log({ response: response, error: error });
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response || !response.data)
                        return [2 /*return*/, { error: 'NoData' }];
                    data = response.data;
                    sections = data.split('@');
                    maxHeven = 0;
                    watchData = {};
                    rows = sections[2].split(';');
                    for (_i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                        row = rows_1[_i];
                        if (!row)
                            continue;
                        cols = row.split(',');
                        if (cols.length === 0 || cols.length === 10)
                            continue;
                        symbolId = cols[0];
                        heven = parseInt(cols[4]);
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
                        };
                        if (heven > maxHeven) {
                            maxHeven = heven;
                        }
                    }
                    orderbookRows = sections[3].split(';');
                    for (_f = 0, orderbookRows_1 = orderbookRows; _f < orderbookRows_1.length; _f++) {
                        row = orderbookRows_1[_f];
                        if (!row)
                            continue;
                        _g = row.split(','), symbolId = _g[0], rank = _g[1], sCount = _g[2], bCount = _g[3], bPrice = _g[4], sPrice = _g[5], bVolume = _g[6], sVolume = _g[7];
                        if (!((_a = watchData[symbolId]) === null || _a === void 0 ? void 0 : _a.orderbook)) {
                            watchData[symbolId] = __assign({ orderbook: {
                                    buyRows: [],
                                    sellRows: []
                                } }, watchData[symbolId]);
                        }
                        watchData[symbolId].orderbook.buyRows[rank] = {
                            count: parseInt(bCount),
                            price: parseInt(bPrice),
                            volume: parseInt(bVolume)
                        };
                        watchData[symbolId].orderbook.sellRows[rank] = {
                            count: parseInt(sCount),
                            price: parseInt(sPrice),
                            volume: parseInt(sVolume)
                        };
                    }
                    result = [];
                    for (key in watchData) {
                        dataRow = watchData[key];
                        if (!dataRow.symbolId) {
                            continue;
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
                                buyRows: Object.values(watchData[key].orderbook.buyRows),
                                sellRows: Object.values(watchData[key].orderbook.sellRows)
                            }
                        });
                    }
                    return [2 /*return*/, { data: result }];
                case 2:
                    e_1 = _h.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = getWatchPrice;
//# sourceMappingURL=getPriceData.js.map