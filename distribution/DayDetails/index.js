"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShareholders = exports.getThresholds = exports.getTradersType = exports.getTrades = exports.getOrderBookData = exports.getPriceData = exports.getPriceOverviewData = void 0;
const request_1 = require("../request");
const utils_1 = require("../utils");
__exportStar(require("./types"), exports);
async function getPriceOverviewData(params) {
    try {
        const { insId, dEven } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceDaily/${insId}/${dEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['closingPriceDaily'];
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
        };
    }
    catch (error) {
        return { error };
    }
}
exports.getPriceOverviewData = getPriceOverviewData;
async function getPriceData(params) {
    try {
        const { insId, dEven } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/ClosingPrice/GetClosingPriceHistory/${insId}/${dEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['closingPriceHistory'];
        return {
            data: data.map((row) => ({
                time: (0, utils_1.even2JDate)(dEven, row['hEven']),
                close: row['pClosing'],
                last: row['pDrCotVal'],
                value: row['qTotCap'],
                volume: row['qTotTran5J'],
                count: row['zTotTran']
            }))
        };
    }
    catch (error) {
        return { error };
    }
}
exports.getPriceData = getPriceData;
async function getOrderBookData(params) {
    try {
        const { insId, dEven } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/BestLimits/${insId}/${dEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['bestLimitsHistory'];
        data.sort((a, b) => {
            if (a['hEven'] === b['hEven']) {
                return a['number'] - b['number'];
            }
            return a['hEven'] - b['hEven'];
        });
        let prevData = { buyRows: [], sellRows: [] };
        const hevenMap = {};
        for (const row of data) {
            const heven = row['hEven'];
            const t = (0, utils_1.even2JDate)(dEven, heven);
            const buyRow = {
                time: t,
                count: row['zOrdMeDem'],
                price: row['pMeDem'],
                volume: row['qTitMeDem']
            };
            const sellRow = {
                time: t,
                count: row['zOrdMeOf'],
                price: row['pMeOf'],
                volume: row['qTitMeOf']
            };
            const index = row['number'] - 1;
            if (!(heven in hevenMap)) {
                hevenMap[heven] = { ...prevData };
            }
            while (hevenMap[heven].buyRows.length < index + 1) {
                hevenMap[heven].buyRows.push(null);
            }
            while (hevenMap[heven].sellRows.length < index + 1) {
                hevenMap[heven].sellRows.push(null);
            }
            hevenMap[heven].buyRows[index] = buyRow;
            hevenMap[heven].sellRows[index] = sellRow;
            prevData = hevenMap[heven];
        }
        return {
            data: Object.keys(hevenMap).map(key => ({
                time: (0, utils_1.even2JDate)(dEven, parseInt(key)),
                ...hevenMap[key]
            }))
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getOrderBookData = getOrderBookData;
async function getTrades(params) {
    try {
        const { insId, dEven, summarize } = params;
        const summarizeStr = summarize ? 'true' : 'false';
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/Trade/GetTradeHistory/${insId}/${dEven}/${summarizeStr}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['tradeHistory'];
        return {
            data: data.map((row) => ({
                time: (0, utils_1.even2JDate)(dEven, row['hEven']),
                price: row['pTran'],
                volume: row['qTitTran']
            }))
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getTrades = getTrades;
async function getTradersType(params) {
    try {
        const { insId, dEven } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/ClientType/GetClientTypeHistory/${insId}/${dEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['clientType'];
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
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getTradersType = getTradersType;
async function getThresholds(params) {
    try {
        const { insId, dEven } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/MarketData/GetStaticThreshold/${insId}/${dEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['staticThreshold'];
        return {
            data: {
                rangeMax: data[1]['psGelStaMax'],
                rangeMin: data[1]['psGelStaMin']
            }
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getThresholds = getThresholds;
async function getShareholders(params) {
    try {
        const { insId, dEven } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/Shareholder/${insId}/${dEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        const data = response.data['shareShareholder'];
        return {
            data: data.map((row) => ({
                date: (0, utils_1.even2JDate)(dEven, row['dEven']),
                shareholder: {
                    id: row['shareHolderId'].toString(),
                    name: row['shareHolderName']
                },
                count: row['numberOfShares'],
                percentage: row['perOfShares']
            }))
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getShareholders = getShareholders;
//# sourceMappingURL=index.js.map