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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapType = exports.GroupType = exports.Instrument = exports.MarketWatch = exports.MarketMap = exports.Group = exports.DayDetails = exports.utils = void 0;
var DayDetails = __importStar(require("./DayDetails/index"));
exports.DayDetails = DayDetails;
var Group = __importStar(require("./Group/index"));
exports.Group = Group;
var MarketMap = __importStar(require("./MarketMap/index"));
exports.MarketMap = MarketMap;
var MarketWatch = __importStar(require("./MarketWatch/index"));
exports.MarketWatch = MarketWatch;
var Instrument = __importStar(require("./Instrument/index"));
exports.Instrument = Instrument;
exports.utils = __importStar(require("./utils/index"));
var TseTmc = { DayDetails: DayDetails, Group: Group, MarketMap: MarketMap, MarketWatch: MarketWatch, Instrument: Instrument };
exports.default = TseTmc;
// ---- Enums
var getAllGroups_1 = require("./Group/getAllGroups");
Object.defineProperty(exports, "GroupType", { enumerable: true, get: function () { return getAllGroups_1.GroupType; } });
var getMarketMap_1 = require("./MarketMap/getMarketMap");
Object.defineProperty(exports, "MapType", { enumerable: true, get: function () { return getMarketMap_1.MapType; } });
//# sourceMappingURL=index.js.map