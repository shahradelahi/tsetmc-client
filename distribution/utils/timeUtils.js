"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dEvenValidation = exports.hEvenValidation = exports.even2JDate = exports.dEven2Date = exports.hEven2Time = void 0;
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
function hEvenValidation(hEven) {
    var hEvenStr = hEven.toString();
    if (hEvenStr.length === 6) {
        var hour = parseInt(hEvenStr.slice(0, 2));
        var minute = parseInt(hEvenStr.slice(2, 4));
        var second = parseInt(hEvenStr.slice(4));
        return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59;
    }
    return false;
}
exports.hEvenValidation = hEvenValidation;
function dEvenValidation(dEven) {
    var dEvenStr = dEven.toString();
    var year = parseInt(dEvenStr.slice(0, 4));
    var month = parseInt(dEvenStr.slice(4, 6));
    var day = parseInt(dEvenStr.slice(6));
    return year >= 1300 && year <= 1500 && month >= 1 && month <= 12 && day >= 1 && day <= 31;
}
exports.dEvenValidation = dEvenValidation;
//# sourceMappingURL=timeUtils.js.map