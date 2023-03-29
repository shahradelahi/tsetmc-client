"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.even2JDate = exports.dEven2Date = exports.hEven2Time = exports.deepUpdate = void 0;
function deepUpdate(d1, d2) {
    const ret = { ...d1 };
    for (const [key, value] of Object.entries(d2)) {
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
    const hevenStr = heven.toString();
    if (hevenStr.length === 6) {
        return `${hevenStr.slice(0, 2).padStart(2, '0')}:${hevenStr.slice(2, 4)}:${hevenStr.slice(4)}`;
    }
    return `${hevenStr.slice(0, 1).padStart(2, '0')}:${hevenStr.slice(1, 3)}:${hevenStr.slice(3)}`;
}
exports.hEven2Time = hEven2Time;
function dEven2Date(deven) {
    const devenStr = deven.toString();
    const year = devenStr.slice(0, 4);
    const month = devenStr.slice(4, 6);
    const day = devenStr.slice(6).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
exports.dEven2Date = dEven2Date;
function even2JDate(dEven, hEven) {
    return new Date(`${hEven2Time(dEven)} ${dEven2Date(hEven)}`);
}
exports.even2JDate = even2JDate;
//# sourceMappingURL=utils.js.map