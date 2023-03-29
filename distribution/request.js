"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
async function request(url, options = {}) {
    try {
        const response = await axios_1.default.request({
            url,
            method: "GET",
            headers: {
                'Accept': "ext/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                'Connection': "keep-alive",
                'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
                'X-Requested-With': "XMLHttpRequest",
                ...options.headers || {}
            },
            ...options
        });
        return { data: response };
    }
    catch (error) {
        return { error };
    }
}
exports.request = request;
//# sourceMappingURL=request.js.map