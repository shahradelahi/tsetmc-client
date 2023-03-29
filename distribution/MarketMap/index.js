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
exports.getMarketMap = void 0;
const request_1 = require("../request");
const types_1 = require("./types");
__exportStar(require("./types"), exports);
async function getMarketMap(params) {
    try {
        const { mapType = types_1.MapType.MarketValue, hEven = 0 } = params;
        const { data: response, error } = await (0, request_1.request)(`http://cdn.tsetmc.com/api/ClosingPrice/GetMarketMap?market=0&size=1920&sector=0&typeSelected=${mapType}&hEven=${hEven}`);
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        return {
            data: response.data['marketMap'].map((row) => ({
                id: row['insCode'],
                shortName: row['lVal18AFC'],
                longName: row['lVal30'],
                close: row['pClosing'],
                last: row['pDrCotVal'],
                volume: row['qTotTran5J'],
                value: row['qTotCap'],
                count: row['zTotTran'],
                groupName: row['lSecVal'],
                color: row['color'],
                priceChangePercent: row['priceChangePercent'],
                percent: row['percent']
            }))
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getMarketMap = getMarketMap;
//# sourceMappingURL=index.js.map