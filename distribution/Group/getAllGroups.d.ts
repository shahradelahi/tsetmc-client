import { SafeReturn } from "../request";
export default function getAllGroups(): Promise<SafeReturn<GroupData[]>>;
export declare enum GroupType {
    PAPER = "PAPER",
    INDUSTRY = "INDUSTRIAL"
}
export interface GroupData {
    id: number;
    code: number;
    name: string;
    description: string;
    type: GroupType;
}
