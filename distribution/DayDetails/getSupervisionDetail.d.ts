import { RequestOptions, SafeReturn } from "../request";
export type SupervisionDetail = {
    status: string;
    reason: string;
    description: string;
    date: Date;
};
export default function getSupervisionDetail(insId: string, options?: RequestOptions): Promise<SafeReturn<SupervisionDetail>>;
