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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapType = void 0;
var request_1 = require("../request");
var timeUtils_1 = require("../utils/timeUtils");
var deepmerge_1 = __importDefault(require("deepmerge"));
function getMarketMap(params, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, mapType, _b, hEven, _c, market, _d, sector, _e, size, _f, response, error, e_1;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 2, , 3]);
                    _a = params.mapType, mapType = _a === void 0 ? MapType.MarketValue : _a, _b = params.hEven, hEven = _b === void 0 ? 0 : _b, _c = params.market, market = _c === void 0 ? 0 : _c, _d = params.sector, sector = _d === void 0 ? 0 : _d, _e = params.size, size = _e === void 0 ? 1920 : _e;
                    if (hEven !== 0 && !(0, timeUtils_1.hEvenValidation)(hEven)) {
                        return [2 /*return*/, { error: new Error("Invalid hEven") }];
                    }
                    return [4 /*yield*/, (0, request_1.request)('http://cdn.tsetmc.com/api/ClosingPrice/GetMarketMap', (0, deepmerge_1.default)({
                            params: {
                                market: market,
                                sector: sector,
                                size: size,
                                typeSelected: mapType,
                                hEven: hEven
                            }
                        }, options))];
                case 1:
                    _f = _g.sent(), response = _f.data, error = _f.error;
                    if (error)
                        return [2 /*return*/, { error: error }];
                    if (!response)
                        return [2 /*return*/, ({ error: "No response" })];
                    return [2 /*return*/, {
                            data: response.data.map(function (row) { return ({
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
                            }); })
                        }];
                case 2:
                    e_1 = _g.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = getMarketMap;
var MapType;
(function (MapType) {
    MapType[MapType["MarketValue"] = 1] = "MarketValue";
    MapType[MapType["MarketVolume"] = 2] = "MarketVolume";
})(MapType = exports.MapType || (exports.MapType = {}));
//# sourceMappingURL=getMarketMap.js.map