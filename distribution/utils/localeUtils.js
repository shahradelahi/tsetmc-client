"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faToAr = void 0;
var faToAr = function (value) {
    return value
        .replace(/ی/g, 'ي')
        .replace(/ک/g, 'ك')
        .replace(/۰/g, '٠')
        .replace(/۱/g, '١')
        .replace(/۲/g, '٢')
        .replace(/۳/g, '٣')
        .replace(/۴/g, '٤')
        .replace(/۵/g, '٥')
        .replace(/۶/g, '٦')
        .replace(/۷/g, '٧')
        .replace(/۸/g, '٨')
        .replace(/۹/g, '٩');
};
exports.faToAr = faToAr;
//# sourceMappingURL=localeUtils.js.map