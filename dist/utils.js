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
Object.defineProperty(exports, "__esModule", { value: true });
exports.even2JDate = exports.dEven2Date = exports.hEven2Time = exports.deepUpdate = void 0;
function deepUpdate(d1, d2) {
    var ret = __assign({}, d1);
    for (var _i = 0, _a = Object.entries(d2); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (!(key in d1)) {
            ret[key] = value;
        }
        else if (typeof value === 'object') {
            ret[key] = deepUpdate(d1[key], value);
        }
        else {
            ret[key] = value;
        }
    }
    return ret;
}
exports.deepUpdate = deepUpdate;
function hEven2Time(heven) {
    var hevenStr = heven.toString();
    if (hevenStr.length === 6) {
        return "".concat(hevenStr.slice(0, 2).padStart(2, '0'), ":").concat(hevenStr.slice(2, 4), ":").concat(hevenStr.slice(4));
    }
    return "".concat(hevenStr.slice(0, 1).padStart(2, '0'), ":").concat(hevenStr.slice(1, 3), ":").concat(hevenStr.slice(3));
}
exports.hEven2Time = hEven2Time;
function dEven2Date(deven) {
    var devenStr = deven.toString();
    var year = devenStr.slice(0, 4);
    var month = devenStr.slice(4, 6);
    var day = devenStr.slice(6).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
}
exports.dEven2Date = dEven2Date;
function even2JDate(dEven, hEven) {
    return new Date("".concat(hEven2Time(dEven), " ").concat(dEven2Date(hEven)));
}
exports.even2JDate = even2JDate;
//# sourceMappingURL=utils.js.map