import { SafeReturn } from "../request";
import { Group } from "./types";
export * from './types';
export declare function getAllGroups(): Promise<SafeReturn<Group[]>>;
declare const _default: {
    getAllGroups: typeof getAllGroups;
};
export default _default;
