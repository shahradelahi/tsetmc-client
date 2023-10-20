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
function getClientTypeAll() {
    return __awaiter(this, void 0, void 0, function () {
        var response, text, watchData, rows, _i, rows_1, row, _a, symbolId, r_buy_c, l_buy_c, r_buy_v, l_buy_v, r_sell_c, l_sell_c, r_sell_v, l_sell_v, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://old.tsetmc.com/tsev2/data/ClientTypeAll.aspx')];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    text = _b.sent();
                    watchData = {};
                    rows = text.split(';');
                    for (_i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                        row = rows_1[_i];
                        if (!row) {
                            continue;
                        }
                        _a = row.split(','), symbolId = _a[0], r_buy_c = _a[1], l_buy_c = _a[2], r_buy_v = _a[3], l_buy_v = _a[4], r_sell_c = _a[5], l_sell_c = _a[6], r_sell_v = _a[7], l_sell_v = _a[8];
                        watchData[symbolId] = {
                            legal: {
                                buy: {
                                    volume: parseInt(l_buy_v),
                                    count: parseInt(l_buy_c),
                                },
                                sell: {
                                    volume: parseInt(l_sell_v),
                                    count: parseInt(l_sell_c),
                                }
                            },
                            real: {
                                buy: {
                                    volume: parseInt(r_buy_v),
                                    count: parseInt(r_buy_c),
                                },
                                sell: {
                                    volume: parseInt(r_sell_v),
                                    count: parseInt(r_sell_c),
                                }
                            },
                        };
                    }
                    return [2 /*return*/, { data: watchData }];
                case 3:
                    e_1 = _b.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.default = getClientTypeAll;
//# sourceMappingURL=getClientTypeAll.js.map