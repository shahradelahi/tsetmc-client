import { SafeReturn } from "../request";
import { Group } from "./types";
export * from './types';
export declare function getAllGroups(): Promise<SafeReturn<Group[]>>;
