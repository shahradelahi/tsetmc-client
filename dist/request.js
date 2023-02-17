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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var request_1 = __importDefault(require("request"));
function request(params) {
    return new Promise(function (resolve, reject) {
        var options = {
            method: params.method,
            headers: __assign({ 'Accept': "ext/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", 'Connection': "keep-alive", 'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", 'X-Requested-With': "XMLHttpRequest" }, params.headers || {}),
            qs: params.query || {},
            body: params.body || undefined
        };
        (0, request_1.default)(params.url, options, function (error, response, body) {
            if (error) {
                reject(error);
            }
            else {
                resolve({
                    text: function () { return body; },
                    json: function () { return JSON.parse(body); }
                });
            }
        });
    });
}
exports.request = request;
//# sourceMappingURL=request.js.map