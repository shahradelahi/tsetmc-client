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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllGroups = void 0;
const request_1 = require("../request");
__exportStar(require("./types"), exports);
async function getAllGroups() {
    try {
        const { data: response, error } = await (0, request_1.request)('http://cdn.tsetmc.com/api/StaticData/GetStaticData');
        if (error)
            return { error };
        if (!response)
            return ({ error: "No response" });
        return {
            data: response.data['staticData']
        };
    }
    catch (e) {
        return { error: e };
    }
}
exports.getAllGroups = getAllGroups;
//# sourceMappingURL=index.js.map