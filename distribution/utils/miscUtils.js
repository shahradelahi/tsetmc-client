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
exports.deepUpdate = void 0;
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
//# sourceMappingURL=miscUtils.js.map