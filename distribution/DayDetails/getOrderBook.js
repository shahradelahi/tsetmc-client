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
var timeUtils_1 = require("../utils/timeUtils");
function getOrderBook(params, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var insId, dEven_1, _a, response, error, data, prevData, hevenMap_1, _i, data_1, row, heven, t, buyRow, sellRow, index, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    insId = params.insId, dEven_1 = params.dEven;
                    return [4 /*yield*/, (0, request_1.request)("http://cdn.tsetmc.com/api/BestLimits/".concat(insId, "/").concat(dEven_1), options)];
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
                        t = (0, timeUtils_1.even2JDate)(dEven_1, heven);
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
                            data: Object.keys(hevenMap_1).map(function (key) { return (__assign({ time: (0, timeUtils_1.even2JDate)(dEven_1, parseInt(key)) }, hevenMap_1[key])); })
                        }];
                case 2:
                    e_1 = _b.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = getOrderBook;
//# sourceMappingURL=getOrderBook.js.map