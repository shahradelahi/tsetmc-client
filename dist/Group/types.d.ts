export declare enum GroupType {
    PAPER = "PAPER",
    INDUSTRY = "INDUSTRIAL"
}
export interface Group {
    id: number;
    code: number;
    name: string;
    description: string;
    type: GroupType;
}
