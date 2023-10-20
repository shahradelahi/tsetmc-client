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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../request");
var deepmerge_1 = __importDefault(require("deepmerge"));
var utils_1 = require("../utils");
function getBoardMembersHistory(params, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var _a, response, error, ds, result, _i, ds_1, item, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, request_1.request)('http://old.tsetmc.com/tsev2/data/CodalContent.aspx', (0, deepmerge_1.default)({
                            params: {
                                s: (0, utils_1.faToAr)(params.symbol),
                                r: '12'
                            }
                        }, options))];
                case 1:
                    _a = _b.sent(), response = _a.data, error = _a.error;
                    if (error) {
                        return [2 /*return*/, { error: error }];
                    }
                    if (!response || !response.data) {
                        return [2 /*return*/, { error: 'NoData' }];
                    }
                    ds = eval(response.data);
                    result = [];
                    for (_i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
                        item = ds_1[_i];
                        if (item[4].Root.AssemblyDate) {
                            result.push({
                                type: 'BoardMembers',
                                AssemblyDate: item[4].Root.AssemblyDate,
                                SessionDate: item[4].Root.BoardMembersSessionDate,
                                BoardMembers: item[4].Root.BoardMembers.BoardMember.map(function (member) { return (__assign(__assign({}, member), { Charged: member.Charged === 'موظف' || member.Charged === 'True' })); })
                            });
                        }
                        if (item[4].Root.DirectorManager) {
                            result.push({
                                type: 'DirectorManager',
                                MeetingDate: item[1],
                                SessionDate: item[2],
                                DirectorManager: {
                                    Name: item[4].Root.DirectorManager.DirectorManagerName,
                                    NationalCode: item[4].Root.DirectorManager.DirectorManagerNationalCode,
                                    EducationDegree: item[4].Root.DirectorManager.DirectorManagerEducationDegree
                                }
                            });
                        }
                    }
                    return [2 /*return*/, { data: result }];
                case 2:
                    e_1 = _b.sent();
                    return [2 /*return*/, { error: e_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = getBoardMembersHistory;
//# sourceMappingURL=getBoardMembersHistory.js.map